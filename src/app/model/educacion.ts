export class Educacion {
    id?: number;
    titulo: string;
    institucion: string;
    promedio: string;
    periodo: string;

    constructor(titulo: string, institucion: string, promedio: string, periodo: string){
        this.titulo = titulo;
        this.institucion = institucion;
        this.promedio = promedio;
        this.periodo = periodo;
    }
}
