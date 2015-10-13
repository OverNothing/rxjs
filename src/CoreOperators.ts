import Observable from './Observable';
import Scheduler from './Scheduler';
import ConnectableObservable from './observables/ConnectableObservable';
import Subject from './Subject'
import {GroupedObservable} from './operators/groupBy-support';

export interface CoreOperators<T> {
  buffer?: <T>(closingNotifier: Observable<any>) => Observable<T[]>;
  bufferCount?: <T>(bufferSize: number, startBufferEvery: number) => Observable<T[]>;
  bufferTime?: <T>(bufferTimeSpan: number, bufferCreationInterval?: number, scheduler?: Scheduler) => Observable<T[]>;
  bufferToggle?: <T, O>(openings: Observable<O>, closingSelector?: (openValue: O) => Observable<any>) => Observable<T[]>
  bufferWhen?: <T>(closingSelector: () => Observable<any>) => Observable<T[]>;
  catch?: (selector: (err: any, source: Observable<T>, caught: Observable<any>) => Observable<any>) => Observable<T>;
  combineAll?: <R>(project?: (...values: Array<any>) => R) => Observable<R>;
  combineLatest?: <R>(...observables: (Observable<any> | ((...values: Array<any>) => R)) []) => Observable<R>;
  concat?: (...observables: any[]) => Observable<any>;
  concatAll?: () => Observable<any>;
  concatMap?: <R>(project: ((x: T, ix: number) => Observable<any>), projectResult?: (x: T, y: any, ix: number, iy: number) => R) => Observable<R>;
  concatMapTo?: <R>(observable: Observable<any>, projectResult?: (x: T, y: any, ix: number, iy: number) => R) => Observable<R>;
  count?: () => Observable<number>;
  dematerialize?: () => Observable<any>;
  debounceTime?: <R>(dueTime: number, scheduler?: Scheduler) => Observable<R>;
  defaultIfEmpty?: <T, R>(defaultValue: R) => Observable<T>|Observable<R>;
  delay?: <T>(delay: number, scheduler?: Scheduler) => Observable<T>;
  distinctUntilChanged?: (compare?: (x: T, y: T) => boolean, thisArg?: any) => Observable<T>;
  do?: <T>(next?: (x: T) => void, error?: (e: any) => void, complete?: () => void) => Observable<T>;
  expand?: (project: (x: T, ix: number) => Observable<any>) => Observable<any>;
  filter?: (predicate: (x: T) => boolean, ix?: number, thisArg?: any) => Observable<T>;
  finally?: (ensure: () => void, thisArg?: any) => Observable<T>;
  first?: <R>(predicate?: (value: T, index: number, source: Observable<T>) => boolean, resultSelector?: (value:T, index: number) => R, thisArg?: any, defaultValue?: any) => Observable<R>;
  flatMap?: <R>(project: ((x: T, ix: number) => Observable<any>), projectResult?: (x: T, y: any, ix: number, iy: number) => R, concurrent?: number) => Observable<R>;
  flatMapTo?: <R>(observable: Observable<any>, projectResult?: (x: T, y: any, ix: number, iy: number) => R, concurrent?: number) => Observable<R>;
  groupBy?: <T, R>(keySelector: (value:T) => string, elementSelector?: (value:T) => R, durationSelector?: (group: GroupedObservable<R>) => Observable<any>) => Observable<GroupedObservable<R>>;
  ignoreElements?: () => Observable<T>;
  last?: <R>(predicate?: (value: T, index:number) => boolean, resultSelector?: (value: T, index: number) => R, thisArg?: any, defaultValue?: any) => Observable<T>;
  every?: (predicate: (value: T, index:number) => boolean, thisArg?: any) => Observable<T>;
  map?: <T, R>(project: (x: T, ix?: number) => R, thisArg?: any) => Observable<R>;
  mapTo?: <R>(value: R) => Observable<R>;
  materialize?: () => Observable<any>;
  merge?: (...observables:any[]) => Observable<any>;
  mergeAll?: (concurrent?: any) => Observable<any>;
  mergeMap?: <R>(project: ((x: T, ix: number) => Observable<any>), projectResult?: (x: T, y: any, ix: number, iy: number) => R, concurrent?: number) => Observable<R>;
  mergeMapTo?: <R>(observable: Observable<any>, projectResult?: (x: T, y: any, ix: number, iy: number) => R, concurrent?: number) => Observable<R>;
  multicast?: (subjectFactory: () => Subject<T>) => ConnectableObservable<T>;
  observeOn?: (scheduler: Scheduler, delay?: number) => Observable<T>;
  partition?: (predicate: (x: T) => boolean) => Observable<T>[];
  publish?: () => ConnectableObservable<T>;
  publishBehavior?: (value: any) => ConnectableObservable<T>;
  publishReplay?: (bufferSize: number, windowTime: number, scheduler?: Scheduler) => ConnectableObservable<T>;
  reduce?: <R>(project: (acc: R, x: T) => R, acc?: R) => Observable<R>;
  repeat?: <T>(count: number) => Observable<T>;
  retry?: <T>(count: number) => Observable<T>;
  retryWhen?: (notifier: (errors: Observable<any>) => Observable<any>) => Observable<T>;
  sample?: <T>(notifier: Observable<any>) => Observable<T>;
  sampleTime?: <T>(delay: number, scheduler?: Scheduler) => Observable<T>;
  scan?: <R>(project: (acc: R, x: T) => R, acc?: R) => Observable<R>;
  share?: () => Observable<T>;
  shareReplay?: (bufferSize: number, windowTime: number, scheduler?: Scheduler) => Observable<T>;
  single?: (predicate?: (value: T, index:number) => boolean, thisArg?: any) => Observable<T>;
  skip?: (count: number) => Observable<T>;
  skipUntil?: (notifier: Observable<any>) => Observable<T>;
  startWith?: <T>(x: T) => Observable<T>;
  subscribeOn?: (scheduler: Scheduler, delay?: number) => Observable<T>;
  switch?: <R>() => Observable<R>;
  switchMap?: <R>(project: ((x: T, ix: number) => Observable<any>), projectResult?: (x: T, y: any, ix: number, iy: number) => R) => Observable<R>;
  switchMapTo?: <R>(observable: Observable<any>, projectResult?: (x: T, y: any, ix: number, iy: number) => R) => Observable<R>;
  take?: (count: number) => Observable<T>;
  takeUntil?: (observable: Observable<any>) => Observable<T>;
  throttle?: (delay: number, scheduler?: Scheduler) => Observable<T>;
  timeout?: <T>(due: number|Date, errorToSend?: any, scheduler?: Scheduler) => Observable<T>;
  timeoutWith?: <T>(due: number|Date, withObservable: Observable<any>, scheduler?: Scheduler) => Observable<T>;
  toArray?: () => Observable<T[]>;
  toPromise?: (PromiseCtor: PromiseConstructor) => Promise<T>;
  window?: <T>(closingNotifier: Observable<any>) => Observable<Observable<T>>;
  windowCount?: <T>(windowSize: number, startWindowEvery: number) => Observable<Observable<T>>;
  windowTime?: <T>(windowTimeSpan: number, windowCreationInterval?: number, scheduler?: Scheduler) => Observable<Observable<T>>;
  windowToggle?: <T, O>(openings: Observable<O>, closingSelector?: (openValue: O) => Observable<any>) => Observable<Observable<T>>
  windowWhen?: <T>(closingSelector: () => Observable<any>) => Observable<Observable<T>>;
  withLatestFrom?: <R>(...observables: (Observable<any> | ((...values: Array<any>) => R)) []) => Observable<R>;
  zip?: <R>(...observables: (Observable<any> | ((...values: Array<any>) => R)) []) => Observable<R>;
  zipAll?: <R>(project?: (...values: Array<any>) => R) => Observable<R>;
}