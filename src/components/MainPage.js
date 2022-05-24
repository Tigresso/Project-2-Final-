import TopBar from './TopBar'

import KEOTARTSCover from '/Users/kaylaortiz/Desktop/KaylaOrtiz-Project2/my-app/src/drawings/KEOTARTSCover.JPG';

function MainPage() {
    return (
            <body>

                <div class="Top-container">   

                        <div class="Title-container">
                            <header>
                                <h1 class="Middle-container">KEOTARTS</h1>

                                <div class="MainDrawing">
                                    <img src={KEOTARTSCover} className="MainPag-KEOTARTSCover" alt="KEOTARTSCover.JPG" />
                                </div>
                                
                                <TopBar/>
                            </header>  

                            
                        </div>

                        
                 </div>
                      
                <div class="Page-container">       
                </div>
 
            </body>
            );
        }
    

export default MainPage;