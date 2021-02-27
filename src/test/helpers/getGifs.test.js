import { getGifs } from "../../helpers/getGifs";


describe('Pruebas con GetGifs', () => {
    
    test('debe traer 11 elementos', async () => {
        
        const gift = await('dragon ball');

        expect(gift.length).toBe( 11 );

    })

    test('no trae categoria', async () => {
        
        const gift = await('');

        expect(gift.length).toBe( 0 );

    })
    

});