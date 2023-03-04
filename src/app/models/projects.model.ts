export class Projects {
  constructor(
    public id: string,
    public imageUrl: string,
    public name: string,
    public shortDescription?: string,
    public longDescriptioin?: string,
    public filters?: string[],
    public gallery?: string[],
    public description?: string[],
    public detail?: string[],
    public videos?: string[],
    public externalLinks?: string[],
  ){}

}
