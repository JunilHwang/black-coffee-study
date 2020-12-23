import {parseQuery} from "@/utils";
import {RequestQuery} from "@/domains";

export const Router = class {

  public $query: RequestQuery = {};

  constructor (
    private readonly callback: (uri: string) => void,
    private readonly baseURI: string = ""
  ) {
    window.onpopstate = () => this.load();
  }

  public load (): void {
    const uri: string = location.href.replace(location.origin, "");
    this.$query = parseQuery(uri);
    this.callback(uri);
  }

  public push (uri: string): void {
    const fullUri = `${this.baseURI}/#!${uri}`;
    const query: RequestQuery = parseQuery(uri);
    this.$query = query;
    this.callback(fullUri);
    history.pushState(query, '', fullUri);
  }

}
