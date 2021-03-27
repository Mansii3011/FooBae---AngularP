import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { AppComponent } from './app.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { UpdateComponent } from './update/update.component';
import { HttpClientModule} from '@angular/common/http';
import { CommonService } from './common.service';
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule

      ],
      declarations: [
        AppComponent,
        CommonService
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  it('should create the app', () => {
    TestBed.configureTestingModule({
      providers: [HttpClientModule]
    });
    const fixture = TestBed.createComponent(UpdateComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  it('should create the app', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  it('should create the app', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AddBlogComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  it('should create the app', () => {
    const fixture = TestBed.createComponent(BlogListComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  it(`should have as title 'food-blog'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('FooBae');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('FooBae');
  });
});
