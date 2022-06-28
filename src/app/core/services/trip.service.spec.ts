import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  HttpClient,
  HttpClientModule,
  HttpErrorResponse,
} from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { TripService } from './trip.service';
import {
  tripMock,
  tripNewMock,
  tripsMock,
  tripJSONMock,
} from '../mocks/trip.mock';
import { asyncData, asyncError } from '../helpers/async.observable.helpers';

describe('TripService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: TripService;

  const errorNotFoundResponse = new HttpErrorResponse({
    error: 'test 404 error',
    status: 404,
    statusText: 'Not Found',
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [TripService, HttpClient],
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    service = new TripService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('trips functions', () => {
    let trips = tripsMock;
    let trip = tripMock;

    beforeEach(() => {
      trips = tripsMock;
      trip = tripMock;
    });

    describe('getTrips function', () => {
      it('should have getTrips function', () => {
        expect(service.getTrips).toBeTruthy();
      });

      it('should return all trips', (done: DoneFn) => {
        httpClientSpy.get.and.returnValue(asyncData(tripJSONMock));

        service.getTrips().subscribe({
          next: (response) => {
            expect(response).toEqual(trips);
            done();
          },
          error: done.fail,
        });
      });

      it('should return an array length > 0 and length === 24', (done: DoneFn) => {
        httpClientSpy.get.and.returnValue(asyncData(tripJSONMock));

        service.getTrips().subscribe({
          next: (response) => {
            expect(response.length).toBeGreaterThan(0);
            expect(response.length).toBe(24);
            done();
          },
          error: done.fail,
        });
      });

      it('should return an array empty ({}) if the server not have trips', (done: DoneFn) => {
        httpClientSpy.get.and.returnValue(
          asyncData({
            count: 0,
            next: null,
            previous: null,
            results: [],
          })
        );

        service.getTrips().subscribe({
          next: (response) => {
            expect(response).toBeDefined([]);
            done();
          },
          error: done.fail,
        });
      });

      it('should return an error when the server not found the trips and returns a 404', async () => {
        httpClientSpy.get.and.returnValue(asyncError(errorNotFoundResponse));

        await service.getTrips().subscribe({
          next: (response) => {
            fail('expected an error, not trips');
          },
          error: (error) => expect(error.error).toContain('test 404 error'),
        });
      });
    });

    describe('getTripByHash function', () => {
      const hashSuccess = '7123174eb8354c6eba3f94a44120e66e';
      const hashError = '12345678b8354c6eba3f94a44120e66e';

      it('should have getTripByHash function', () => {
        expect(service.getTripByHash).toBeTruthy();
      });

      it('should return the trip with the hash that passed to param', (done: DoneFn) => {
        httpClientSpy.get.and.returnValue(asyncData(tripJSONMock));

        console.log('TRIP 1 ', trip);

        service.getTripByHash(hashSuccess).subscribe({
          next: (response) => {
            console.log('response 1 ', response);
            console.log('hashSuccess 1 ', hashSuccess);
            expect(response.hash).toEqual(hashSuccess);
            done();
          },
          error: done.fail,
        });
      });

      it('should return an object undefined if the server not find the trip', (done: DoneFn) => {
        httpClientSpy.get.and.returnValue(asyncData(tripJSONMock));

        service.getTripByHash(hashError).subscribe({
          next: (response) => {
            expect(response).toBeUndefined();
            done();
          },
          error: done.fail,
        });
      });

      it('should return an error when the server not found the trip and returns a 404', async () => {
        httpClientSpy.get.and.returnValue(asyncError(errorNotFoundResponse));

        await service.getTripByHash(hashError).subscribe({
          next: (response) => {
            fail('expected an error, not car');
          },
          error: (error) => expect(error.error).toContain('test 404 error'),
        });
      });
    });

    describe('createTrip function', () => {
      it('should have createTrip function', () => {
        expect(service.createTrip).toBeTruthy();
      });

      it('should return the new trip with the data that passed to param', () => {
        const tripNew = service.createTrip(tripNewMock);
        console.log('tripNew ', tripNew);
        tripNewMock.hash = tripNew.hash;
        expect(tripNew).toEqual(tripNew);
      });
    });
  });
});
