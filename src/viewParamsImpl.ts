import { IViewParams } from './component.service';

export class ViewParamsImpl implements IViewParams {
  constructor(
    public component: IViewParams['component'],
    public data: IViewParams['data'],
    public name: IViewParams['name']
  ) {}
}
