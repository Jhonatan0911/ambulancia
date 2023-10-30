export class Response<T> {
  isError: boolean | undefined;
  statusCode: number | undefined;
  data!: T;
  mensaje: string | undefined;
  mensajeError: string | undefined;
  erros: string | undefined;
}
