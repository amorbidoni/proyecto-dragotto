export class Projects {
  constructor(
    public id: string,
    public imgeUrl: string,
    public name: string,
    public shortDescription?: string,
    public longDescriptioin?: string,
    public filters?: string[]
  ){}

}
