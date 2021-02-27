import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks'                   

describe('Pruebas en el hooks useFetchGifs', () => {
    
    test('debe de retornar el estado inciial', async() => {

        const {result, waitForNextUpdate} = renderHook( ()=> useFetchGifs('One Punch') ) // la forma de testear custom hooks con testin-library
        const {data, loading} = result.current; //desectruturando el objeto para obetener lo requerido

        await waitForNextUpdate();

        expect(data).toEqual([])
        expect(loading).toBe(true);

    });

    test('debe retornarn una imagen  el loading en false', async() => {
        
        const {result, waitForNextUpdate} = renderHook( ()=> useFetchGifs('One Punch') )
        await waitForNextUpdate();
        
        const {data, loading} = result.current; //desectruturando el objeto para obetener lo requerido

        expect(data.length).toBe(10)
        expect(loading).toBe(false);

    })
    

});