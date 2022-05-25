
import art1 from '/Users/kaylaortiz/Desktop/KaylaOrtiz-Project2/my-app/src/drawings/art.jpg';
import art2 from '/Users/kaylaortiz/Desktop/KaylaOrtiz-Project2/my-app/src/drawings/Tigress.JPG';
import art3 from '/Users/kaylaortiz/Desktop/KaylaOrtiz-Project2/my-app/src/drawings/kayla ortiz.jpg';
import art4 from '/Users/kaylaortiz/Desktop/KaylaOrtiz-Project2/my-app/src/drawings/art4.JPG';


function Art() {
    return (

<body>

<div class="row">
  <div class="art1">
  <img src={art1} className="art1" alt="art1.JPG" />
  </div>
  <div class="art2">
  <img src={art2} className="art2" alt="art2.JPG" />
  </div>
  <div class="art3">
  <img src={art3} className="art3" alt="art3.JPG" />
  </div>
  <div class="art4">
  <img src={art4} className="art4" alt="art4.JPG" />
  </div>
</div>

</body>
    );
}
    

export default Art;