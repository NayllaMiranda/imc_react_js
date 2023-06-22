export type Level = {
    title: string;
    color: string;
    icon: string;
    imc: number[];
    yourImc ?: number;
};

export const levels: Level[] = [
    { title: 'magreza',   color: '#f5432c', icon: 'down', imc: [0, 18.5] },
    { title: 'normal',    color: '#4af767', icon: 'up',   imc: [18.6, 24.9] },
    { title: 'sobrepeso', color: '#c21146', icon: 'down', imc: [25, 30] },
    { title: 'obesidade', color: '#f50202', icon: 'down', imc: [30.1, 99] },
];

export const calculateImc = (weight: number, height: number) => {
    const imc = weight / (height * height);

    for( let i in levels){
        if (imc >= levels[i].imc[0] && levels[i].imc[1]){
            levels[i].yourImc = imc 
            return levels[i]
        }
    }
      return null
}