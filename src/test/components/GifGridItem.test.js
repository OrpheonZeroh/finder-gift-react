import React from 'react'
import {shallow} from 'enzyme'
import { GifGridItem } from '../../components/GifGridItem';


describe('Pruebas con <GifGridItem/>', () => {

    const title = 'Titulo';
    const url = 'http://localhost:8900/epale'
    const wrapper = shallow(<GifGridItem title={title} url={url} />)

    test('debe de mostrar el componente correctamente', () => {

        expect(wrapper).toMatchSnapshot()
        
    });

    test('debe de tener un parrafo con el titulo', () => {
        
        const p = wrapper.find('p')
        expect(p.text().trim()).toBe(title)

    })
    
    test('debe tener la imagen igual al url y alt a los props', () => {
        
        const img = wrapper.find('img');
        // console.log(img.props())console.log(img.prop('src'))
        expect(img.prop('src') ).toBe(url)
        expect(img.prop('alt') ).toBe(title)

    });

    test('debe tener animate__pulse', () => {

        const div = wrapper.find('div')
        const className = (div.prop('className'))
        //expect(div.prop('div') ).toBe(css_class)
        expect(className.includes('animate__pulse')).toBe(true)
        
    })
    

    
})
