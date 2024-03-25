import { Enums } from '@cornerstonejs/core'
import { renderingEngine } from '../../cornerstone'
import { useRef, useEffect } from 'react';

export const Image = ({ imageID }) => {
    const ref = useRef()

    useEffect(() => {
        const render = async () => {
            const element = document.createElement('div');
            element.style.width = '500px';
            element.style.height = '500px';

            ref.current.appendChild(element)

            const { ViewportType } = Enums;

            const viewportId = imageID;
            const viewportInput = {
                viewportId,
                element,
                type: ViewportType.STACK,
            };

            renderingEngine.enableElement(viewportInput);

            const viewport = renderingEngine.getViewport(
                                viewportInput.viewportId);
            
            await viewport.setStack(["wadouri:http://localhost:5000/images/"
                                        + imageID])
            viewport.render()
        }
        render();
    }, []);
    
    return <li><div ref={ref}></div><br/></li>
}