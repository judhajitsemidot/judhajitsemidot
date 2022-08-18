import { Subject } from "rxjs";
const subject = new Subject();

export const CommonButtonLoaderService = {
  startLoading: (type) => subject.next({ dataActive: false , type }),
  stopLoading: () => subject.next({ dataActive: true }),
  loadingState: () => subject.asObservable(),
};
