import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class QuizService {

  constructor(private http: HttpClient) { }

  get(url: string) {
    return this.http.get(url);
  }

  getAll() {
    return [
      { id: 'data/sql.json', name: 'SQL' },
      { id: 'data/javascript.json', name: 'JavaScript' },
      //{ id: 'data/csharp.json', name: 'C Sharp' },
      { id: 'data/bootstrap.json', name: 'Bootstrap' },
      //{ id: 'data/javascript.json', name: 'JavaScript' },
      //{ id: 'data/designPatterns.json', name: 'Design Patterns' }

    ];
  }

}
