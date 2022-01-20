export const mainOutlet = '__MAIN_OUTLET__';
class OutletService {
  resolveOutletName(toState: string, fromState: string): string {
    /**
     * Check route names by default return main outlet name
     */
    if (typeof toState !== 'string') return mainOutlet;
    if (typeof fromState !== 'string') return mainOutlet;
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
}

export const outletService = new OutletService();
