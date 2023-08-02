import NavBar from "../components/NavBar";
import Card from "../components/Card";

export default function Search() {
  return (
    <section className="container-search">
      <NavBar />
      <div className="wrapper-search">
        
        <div className="container-filter">
          <h2>
            <i className="fa-solid fa-filter-list"></i>FILTER
          </h2>
          <div className="wrapper-filter">
            <div className="card-filter">
              <h3>Lokasi</h3>
              <ul className="card-list">
                <label className="list container-list">
                  Four
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label className="list container-list">
                  Four
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label className="list container-list">
                  Four
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label className="list container-list">
                  Four
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
              </ul>
            </div>
            <div className="card-filter">
              <h3>Metode Pembayaran</h3>
              <ul className="card-list">
                <label className="list container-list">
                  COD (Bayar di Tempat)
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
              </ul>
            </div>
            <div className="card-filter">
              <h3>Opsi Pengiriman</h3>
              <ul className="card-list">
                <label className="list container-list">
                  Regular
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label className="list container-list">
                  Yesterday
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label className="list container-list">
                  Instant
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
              </ul>
            </div>
            <div className="card-filter">
              <h3>Batas Harga</h3>
              <ul className="card-list">
                <div className="container-input">
                  <div className="wrapper-input">
                    <input type="text" className="min" placeholder="Rp Min" />
                    <span></span>
                    <input type="text" className="max" placeholder="Rp Max" />
                  </div>
                  <button>Apply</button>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-filter-card">
          <div className="wrapper-filter-card">
            
            <div className="left">
            <h3>Urutkan</h3>
              <div className="list-filter-card">
                <button className="list">Terkait</button>
                <button className="list">Terbaru</button>
                <button className="list">Populer</button>
               
              </div>
            </div>
            <div className="right">
              
            <select  className="list-harga" >
              <option value="harga"  disabled selected>Harga</option>
  <option value="terendah">Harga Terendah</option>
  <option value="ca">Harga Tertinggi</option>
  </select>
            </div>
          </div>
          <div className="container-card">
            <div className="wrapper-card">
              <Card />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
