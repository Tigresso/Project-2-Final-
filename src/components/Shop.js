function Shop() {
  function shoplinks(e) {
    e.preventDefault();
    console.log('You clicked');
  }

  return (
    
    <form onSubmit={shoplinks}>
      <h1>Shops</h1>

      <div className="shops-links"> 

        <div className="shop"> 
        <a
          className="shop1"
          href="https://www.redbubble.com/people/keotarts/shop"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Out My RedBubble Shop!
        </a>
</div>
        <div className="shop"> 
        <a
          className="shop2"
          href="https://www.teepublic.com/user/keotarts"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Out My TeePublic Shop!
        </a>
</div>

<div className="shop"> 
        <a
          className="shop3"
          href="https://keotarts.threadless.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Out My ThreadLess Shop!
        </a>
        </div>

        </div>
    </form>
  );
}
export default Shop;