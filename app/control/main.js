import glassList from '../../assets/data/data.js';

const renderGlassList = () => {
  let glassItemHTML = '';
  const vglassesListEle = document.getElementById('vglassesList');

  // render each glasses to html
  glassList.forEach((glasses, index) => {
    glassItemHTML += `
    <div onclick="pickGlasses('${glasses.id}')"  class="col-4 card--glasses">
        <button class="card text-left">
        <img class="card-img-top" src="../../assets/img/${glasses.src}" alt="${glasses.name}" />
        </button>
    </div>
    `;
  });
  vglassesListEle.innerHTML = glassItemHTML;
};

const pickGlasses = (id) => {
  renderGlassesImgOnModel(id);
  renderGlassesInfo(id);
};

window.pickGlasses = pickGlasses;

const renderGlassesImgOnModel = (id) => {
  const avatar = document.getElementById('avatar');
  const glassesFound = glassList.find((glasses) => glasses.id === id);

  const vglassHTML = `
  <img src="../../assets/img/${glassesFound.virtualImg}" alt="${glassesFound.name}" />
  `;

  avatar.innerHTML = vglassHTML;
};

const renderGlassesInfo = (id) => {
  const glassesInfoEle = document.getElementById('glassesInfo');

  const glassesFound = glassList.find((glasses) => glasses.id === id);

  const glassesInfoHTML = `
    <span class="brand">${glassesFound.brand} - </span>
    <span class="name">${glassesFound.name}</span>
    <p class="color">Color: ${glassesFound.color}</p>
    <p class="price">${glassesFound.price} $</p>
    <p class="description">
      ${glassesFound.description}
    </p>  
  `;

  glassesInfoEle.innerHTML = glassesInfoHTML;
};

renderGlassList();
