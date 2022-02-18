import { IOutletOrder } from './outlet.service';

export class OutletOrderImpl implements IOutletOrder {
  constructor(
    public action: IOutletOrder['action'],
    public outletName: IOutletOrder['outletName'],
    public component?: IOutletOrder['component'],
  ) {}
}
