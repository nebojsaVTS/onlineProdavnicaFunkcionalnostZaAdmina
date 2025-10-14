class Artikal {
    constructor(naziv, cena, opis) {
        this.naziv = naziv;
        this.cena = cena;
        this.opis = opis;
    }
}


const artikal1 = new Artikal("Laptop", 1200.99, "Praktičan i moćan laptop za svakodnevni rad.");
const artikal2 = new Artikal("Telefon", 799.49, "Moderan pametni telefon sa dugotrajnom baterijom.");
const artikal3 = new Artikal("Monitor", 249.99, "Full HD monitor od 24 inča sa tankim okvirom.");


const artikli = [artikal1, artikal2, artikal3];

function createArticleRows() {
    const tabelaBody = document.querySelector("#tabela-body");

    
    tabelaBody.innerHTML = "";

    for (let i = 0; i < artikli.length; i++) {
        const artikal = artikli[i];
        const tr = document.createElement("tr");

        
        const tdRb = document.createElement("td");
        tdRb.textContent = i + 1;

        const tdNaziv = document.createElement("td");
        tdNaziv.textContent = artikal.naziv;

        const tdCena = document.createElement("td");
        tdCena.textContent = artikal.cena.toFixed(2);

        
        tr.appendChild(tdRb);
        tr.appendChild(tdNaziv);
        tr.appendChild(tdCena);

        tr.addEventListener("click", function(){
            prikaziDetalje(artikal)
        })
        
        tabelaBody.appendChild(tr);
    }
}

function prikaziDetalje(artikal) {
    const detailsDiv = document.querySelector("#details-div");
    detailsDiv.innerHTML = `
        <p><strong>Naziv:</strong> ${artikal.naziv}</p>
        <p><strong>Cena:</strong> ${artikal.cena.toFixed(2)} $</p>
        <p><strong>Opis:</strong> ${artikal.opis}</p>
    `;
}

document.addEventListener("DOMContentLoaded", createArticleRows);
