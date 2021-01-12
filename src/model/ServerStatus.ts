
export class ServerStatus{

    private host: string;
    private status: number;
    private message: string;

   constructor(host: string, status: number, message: string) {
       this.host = host;
       this.status = status;
       this.message = message;
   }

}
