import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  
  it(`should fetch posts as an Observable`, async(inject([HttpTestingController, UserService],
    (httpClient: HttpTestingController, postService: UserService) => {

      const postItem = [
        {
  
          "_id": '1',
          "usr_address": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          "usr_email": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
    
          "_id":' 2',
          "usr_address": "qui est esse",
          "usr_email": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
  
          "_id":' 3',
          "usr_address": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
          "usr_email": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        }
      ];


      service.getUsers()
        .subscribe((posts: any) => {
          expect(posts.length).toBe(3);
        });

      let req = httpMock.expectOne('https://jsonplaceholder.typicode.com/posts');
      expect(req.request.method).toBe("GET");

      req.flush(postItem);
      httpMock.verify();

    })));
});
