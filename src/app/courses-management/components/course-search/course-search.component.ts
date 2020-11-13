import { Component, OnInit } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Course} from '../../models/course.class';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {CourseService} from '../../services/course.service';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.css']
})
export class CourseSearchComponent implements OnInit {
  /*
      Note :  -- debounceTime : khoảng cách giữa các lần nhập
              -- Subject : như một stream, như có một dòng string để liên tục nhận những kí tự nhập vào
              -- distinctUntilChanged : nếu string mới và string cũ giống nhau thì ko gọi request => lấy result cũ
              -- course$ : là một object , một list chạy theo kiểu asyncPipe, chạy trên một tiến trình riêng, để khi đang request lấy
               kết quả thì vẫn có thể gõ được các kí tự trên thanh search
   */
  course$: Observable<Course[]>;
  private searchSubject = new Subject<string>();
  public searchString: string;

  constructor(
          private courseService: CourseService
  ) { }

  ngOnInit(): void {
    this.course$ = this.searchSubject.pipe(
            debounceTime(300),
            distinctUntilChanged(),
            switchMap((searchString =  this.searchString) =>  this.courseService.searchCourse(searchString)) ,
    );
  }

  search = () => {
    this.searchSubject.next(this.searchString);
  }


}
