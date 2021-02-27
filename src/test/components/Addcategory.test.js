import { AddCategory } from "../../components/AddCategory";
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';


describe('Pruebas en AddCategory', () => {

    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={ setCategories }/>)

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories }/>)
    })

    test('debe de mostrarse correctamente', () => {   
        
        expect( wrapper).toMatchSnapshot();
        
    })

    test('debe de cambiar la caja de texto', () => {
        
        const input = wrapper.find('input')
        const value = 'hola Mundo'
        input.simulate('change', { target: {value} })

        expect( wrapper.find('p').text().trim()).toBe( value ) //verifica si el value "HOLA MUNDO", simulo el cambio en el input

    });

    test('no debe de postear la informacion con submit', () => {

        wrapper.find('form').simulate('submit', { preventDefault(){ }}) //simula un submit

        expect(setCategories).not.toHaveBeenCalled(); //simunla la llamada de una funcion en este caso evalua, que no fue llamado

    })
    
    test('debe de llamar el setCategory y limpiar la caja de texto', () => {
        // const value = 'Hola Mundo';

        // // 1. simular el inputChange
        // wrapper.find('input').simulate('change', { target: { value } });

        // // 2. simular el submit
        // wrapper.find('form').simulate('submit', { preventDefault(){} });

        // // 3. setCategories se debe de haber llamado
        // expect( setCategories ).toHaveBeenCalled();
        // expect( wrapper.find('input').prop('value') ).toBe('');
        const value = 'Hola Mundo'
        wrapper.find('input').simulate('change', { target: {value} }) //simula una funcion (inputChange)
        wrapper.find('form').simulate('submit', { preventDefault(){} }) //simunla un submit de un formulario
        expect(setCategories).toHaveBeenCalled();// tiene que llamar la funcion setCategory
        expect(setCategories).toHaveBeenCalledTimes(1) // tiene que llamar la funcion setCategory una cantidad de veces en especifico
        expect(setCategories).toHaveBeenCalledWith( expect.any(Function))// tiene que llamar la funcion con el parametro de la otra funcion en si
        expect(wrapper.find('input').prop('value')).toBe('') //verifica, que el input este vacio


    });
    

});