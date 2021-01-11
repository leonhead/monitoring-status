
export class ServerStatus{

    private host: string;
    private status: string;
    private message: string;

   constructor(host: string, status: string, message: string) {
       this.host = host;
       this.status = status;
       this.message = message;
   }

}
