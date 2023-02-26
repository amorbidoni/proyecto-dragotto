export type FitlerParams = 'demadera' | 'arquitectura' | 'investigacion' | 'cooperativahormiga' | 'todo' |  'enequipo' | 'construido';
export interface navBarLinks {
    name:string,
    nameBold:string,
    route:string[],
    fitlerParams?: FitlerParams;
}