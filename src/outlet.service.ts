/**
 * Main outlet name
 * @example <MainOutlet />
 */
export const mainOutlet = '__MAIN_OUTLET__';
/**
 * Actions for outlets
 */
export enum OutletAction {
  add = 'add',
  delete = 'delete',
}
class OutletService {
  /**
   * @description Define outlet name to render view from state
   * @param toState 'app.home.users'
   * @param fromState 'app.home.cars'
   * @returns 'app.home'
   */
  resolveOutletName(toState: string, fromState: string): string {
    /**
     * If fromState not a string return main outlet name
     */
    if (typeof fromState !== 'string' || typeof toState !== 'string') return mainOutlet;
    /**
     * Split route names to segments for nested view
     * @example 'app.home.users'
     */
    const to = toState.split('.');
    const from = fromState.split('.');
    /**
     * If top segments different return main outlet name
     */
    const topSegment = 0;
    if (to[topSegment] !== from[topSegment]) return mainOutlet;
    /**
     * Define outlet name for nested view
     */
    const segmentCount = Math.max(to.length, from.length);
    for (let i = topSegment + 1; i < segmentCount; i++) {
      if (to[i] !== from[i]) {
        return to.slice(0, i).join('.');
      }
    }
  }
  /**
   * @description Define action for outlet
   * @param toState 'app.home.users'
   * @param fromState 'app.home'
   * @returns 'add' action
   */
  getAction(toState: string, fromState: string): string {
    /**
     * Return add action if fromState null
     */
    if (typeof fromState !== 'string') return OutletAction.add;
    if (typeof toState !== 'string') return OutletAction.delete;
    /**
     * Split route names to segments for nested view
     * @example 'app.home.users'
     */
    const to = toState.split('.');
    const from = fromState.split('.');
    /**
     * If top segments different return add action
     */
    const topSegment = 0;
    if (to[topSegment] !== from[topSegment]) return OutletAction.add;
    /**
     * Define delete action
     */
    const segmentCount = Math.max(to.length, from.length);
    for (let i = topSegment + 1; i < segmentCount; i++) {
      if (to[i] === undefined) {
        return OutletAction.delete;
      }
      if (to[i] !== from[i]) {
        return OutletAction.add;
      }
    }
  }
}
export const outletService = new OutletService();
