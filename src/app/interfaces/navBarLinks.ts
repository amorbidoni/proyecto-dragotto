export type FitlerParams = 'demadera' | 'arquitectura' | 'investigacion' | 'cooperativahormiga' | 'todo' |  'enequipo';
export interface navBarLinks {
    name:string,
    nameBold:string,
    route:string[],
    fitlerParams?: FitlerParams;
}