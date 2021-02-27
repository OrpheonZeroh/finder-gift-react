import React from 'react';
import '@testing-library/jest-dom'

import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs')

describe('pruebas con < GifGrid />', () => {

    const category = 'One Punch';


    test('debe de mostrarse correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow( <GifGrid category={ category } /> );
        expect( wrapper ).toMatchSnapshot();
        
    });

    test('debe de mostrar items cuando se cargan imágenes useFetchGifs', () => {
        
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
        },
        {
            id: '123',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow( <GifGrid category={ category } /> );
        
        // expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
    })
    // const category = 'Drango Ball'
    
    
    // test('debe renderizr correctamente el componente', () => {
  
    //     useFetchGifs.mockReturnValue({
    //         data: [],
    //         loading: true,
    //     });

    //     const wrapper = shallow(<GifGrid category={ category }/>)
    //     expect( wrapper ).toMatchSnapshot()

    // });

    // test('debe de mostrar item cuando se cargan imagenes usefechtGifs', () => {
        
    //     const gifs = [{
    //         id: '1',
    //         title: 'Epalee',
    //         url: 'https://localhost/epalee'
    //     }]

    //     useFetchGifs.mockReturnValue({
    //         data: gifs,
    //         loading: false,
    //     });

    //     expect( wrapper ).toMatchSnapshot()

    // });

});