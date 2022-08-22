// variables
const navbar = document.getElementById('navbar')
const btnOpen = document.getElementById('nav-btn')
const sidebar = document.querySelector('#navbar>div')
const a = document.querySelectorAll('ul li a')

/*-------------navbar---------------*/
window.addEventListener('scroll', function () {
  const scrollHeight = window.pageYOffset

  if (scrollHeight > 10) {
    navbar.classList.add('navfixed')
  } else {
    navbar.classList.remove('navfixed')
    btnOpen.classList.remove('show')
  }

  const ul = document.querySelector('ul')
  console.log(ul)
  if (scrollHeight > 10 && navbar.getBoundingClientRect().width < 990) {
    btnOpen.classList.add('show')
    btnOpen.addEventListener('click', () => {
      ul.style.display = 'block'
    })
  }
  const sidebarHeight = sidebar.getBoundingClientRect().height

  const heightOfNavbar = navbar.getBoundingClientRect().height

  a.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault()
      const id = e.currentTarget.getAttribute('href').slice(1)
      const element = document.getElementById(id)

      let position = element.offsetTop - heightOfNavbar

      const widthOfNavbar = navbar.getBoundingClientRect().width

      if (scrollHeight >= element.offsetTop) {
        element.style.color = 'orange'
      } else {
        element.style.color = 'black'
      }

      if (widthOfNavbar > 990) {
        position = position
      }

      if (heightOfNavbar > 104 && widthOfNavbar < 990) {
        position = position + sidebarHeight
      }
      // console.log(position)
      window.scrollTo({
        top: position,
        behavior: 'smooth',
      })
      sidebar.classList.remove('show')
    })
  })

  const total = document.querySelector('#total')

  function animateNumber(finalNumber, delay, startNumber = 0, callback) {
    let currentNumber = startNumber
    const interval = window.setInterval(updateNumber, delay)
    function updateNumber() {
      if (currentNumber >= finalNumber) {
        clearInterval(interval)
      } else {
        currentNumber++
      }
      callback(currentNumber)
    }
  }
  if (
    scrollHeight >= total.offsetTop &&
    scrollHeight <= total.offsetTop + total.getBoundingClientRect().height
  ) {
    const data = document.querySelectorAll('#total .number')
    data.forEach((item, index) => {
      if (index === 0) {
        animateNumber(540, 3, 0, function (number) {
          const formattedNumber = number.toLocaleString()
          item.innerText = formattedNumber
        })
      }

      if (index == 1) {
        animateNumber(1200, 3, 0, function (number) {
          const formattedNumber = number.toLocaleString()
          item.innerText = formattedNumber
        })
      }
      if (index == 2) {
        animateNumber(2500, 3, 0, function (number) {
          const formattedNumber = number.toLocaleString()
          item.innerText = formattedNumber
        })
      }

      if (index == 3) {
        animateNumber(940, 3, 0, function (number) {
          const formattedNumber = number.toLocaleString()
          item.innerText = formattedNumber
        })
      }
    })
  }
})

btnOpen.addEventListener('click', () => {
  sidebar.classList.toggle('show')
})

// if else is okay but switch case is run one by one not ignore like if else
/*--------------freequency-questions----------*/
const FREEQUENCY = document.querySelector('#freequency-question .content')

const question = [
  ...document.querySelectorAll(
    '#freequency-question .content article  > div>span'
  ),
]

const answer = [...document.querySelectorAll('.answer')]

question.forEach((item) => {
  item.addEventListener('click', (event) => {
    const element = event.currentTarget

    const find = element.parentElement.nextElementSibling
    console.log(find)
    find.classList.toggle('show')
    find.classList.remove('hide')

    const others = answer.filter((item) => item !== find)
    others.forEach((item) => {
      item.classList.add('hide')
      item.classList.remove('show')
    })
  })
})
// to compare two elements DOM we use ===
/*
target is the element that triggered the event (e.g., the user clicked on)
currentTarget is the element that the event listener is attached to.
*/

/*-------------slider----------------*/

const one = document.querySelector('.one')
// const two = document.querySelector('.two')
const three = document.querySelector('.three')

const personArray = document.querySelectorAll(' #transition #move>article')

const transition = document.querySelector('#move')

let i = 0
// two.addEventListener('click', () => {
//   i == 2
//   transition.style.left = `${-200}vw`
//   personArray[2].style.opacity = '1'
// })

setInterval(() => {
  i = i + 1
  if (i > 2) {
    i = 0
  }
  if (i == 0) {
    transition.style.left = `${0}vw`
  }
  if (i == 1) {
    transition.style.left = `${-100}vw`
  }
  if (i == 2) {
    transition.style.left = `${-200}vw`
  }
  personArray[i].style.opacity = '1'
}, 3000)

one.addEventListener('click', () => {
  i = i - 1

  if (i < 0) {
    i = 2
  }

  if (i == 0) {
    transition.style.left = `${0}vw`
  }
  if (i == 1) {
    transition.style.left = `${-100}vw`
  }
  if (i == 2) {
    transition.style.left = `${-200}vw`
  }
  personArray[i].style.opacity = '1'
})

three.addEventListener('click', () => {
  i = i + 1

  if (i > 2) {
    i = 0
  }
  console.log(i)
  if (i == 0) {
    transition.style.left = `${0}vw`
  }
  if (i == 1) {
    transition.style.left = `${-100}vw`
  }
  if (i == 2) {
    transition.style.left = `${-200}vw`
  }
  personArray[i].style.opacity = '1'
})

/*-----------gallery----------*/
let gallery = [
  {
    image: './image-for-exercise/Gallery/750x580x1.jpg',
    catergory: 'lorem',
  },
  {
    image: './image-for-exercise/Gallery/750x580x3.jpg',
    catergory: 'consectetur',
  },
  {
    image: './image-for-exercise/Gallery/750x580x2.jpg',
    catergory: 'consectetur',
  },

  {
    image: './image-for-exercise/Gallery/750x580x4.jpg',
    catergory: 'ipsum',
  },

  {
    image: './image-for-exercise/Gallery/750x580x5.jpg',
    catergory: 'aliqua',
  },
  {
    image: './image-for-exercise/Gallery/750x580x6.jpg',
    catergory: 'lorem',
  },
]

const newGallery = ['all', ...new Set(gallery)]

// display all items when page loads
window.addEventListener('DOMContentLoaded', function () {
  diplayMenuItems(gallery)
  displayMenuButtons()

  const spanArray = document.querySelectorAll(
    '#gallery .main article .image span'
  )

  console.log(spanArray)
  const fixedGallery = document.querySelector('.fixed-gallery')
  const fixedContainer = document.querySelector(
    '.fixed-gallery .fixed-container'
  )

  const closeFixed = document.querySelector(
    '.fixed-gallery .fixed-container .close'
  )

  const prevSlider = document.querySelector('.fixed-gallery .prev')

  const nextSlider = document.querySelector('.fixed-gallery .next')

  const totalArticle = document.querySelectorAll(
    '.fixed-gallery .fixed-container article'
  )

  console.log(spanArray)
  spanArray.forEach((item, index) =>
    item.addEventListener('click', () => {
      console.log(fixedGallery)
      fixedGallery.classList.add('show')
      navbar.classList.remove('navfixed')
      // btnOpen.classList.remove('show')
      totalArticle.forEach((item) => (item.style.opacity = '1'))
      if (index == 0) {
        fixedContainer.style.left = `${0}vw`
      } else if (index == 1) {
        fixedContainer.style.left = `${-100}vw`
      } else if (index == 2) {
        fixedContainer.style.left = `${-200}vw`
      } else if (index == 3) {
        fixedContainer.style.left = `${-300}vw`
      } else if (index == 4) {
        fixedContainer.style.left = `${-400}vw`
      } else {
        fixedContainer.style.left = `${-500}vw`
      }
    })
  )

  let i = 0
  prevSlider.addEventListener('click', () => {
    i = i - 1
    if (i < 0) {
      i = 5
    }
    totalArticle.forEach((item) => (item.style.opacity = '1'))
    if (i == 0) {
      fixedContainer.style.left = `${0}vw`
    } else if (i == 1) {
      fixedContainer.style.left = `${-100}vw`
    } else if (i == 2) {
      fixedContainer.style.left = `${-200}vw`
    } else if (i == 3) {
      fixedContainer.style.left = `${-300}vw`
    } else if (i == 4) {
      fixedContainer.style.left = `${-400}vw`
    } else {
      fixedContainer.style.left = `${-500}vw`
    }
  })

  nextSlider.addEventListener('click', () => {
    i = i + 1
    if (i > 5) {
      i = 0
    }
    totalArticle.forEach((item) => (item.style.opacity = '1'))
    if (i == 0) {
      fixedContainer.style.left = `${0}vw`
    } else if (i == 1) {
      fixedContainer.style.left = `${-100}vw`
    } else if (i == 2) {
      fixedContainer.style.left = `${-200}vw`
    } else if (i == 3) {
      fixedContainer.style.left = `${-300}vw`
    } else if (i == 4) {
      fixedContainer.style.left = `${-400}vw`
    } else {
      fixedContainer.style.left = `${-500}vw`
    }
  })

  closeFixed.addEventListener('click', () => {
    fixedGallery.classList.remove('show')
  })
})

function diplayMenuItems(newGallery) {
  let text = ''
  newGallery.forEach((item) => {
    const { image, catergory } = item
    return (text += `
<article>
        <div class="image">
              <img src=${image} alt=${catergory}>
            <span>
             <i class="fa fa-search-plus" aria-hidden="true"></i>
            </span>
        </div>
  </article>
  `)
  })

  const main = document.querySelector('#gallery .main')
  main.innerHTML = text
}

function displayMenuButtons() {
  const choice = document.querySelector('.choices')

  const buttonArray = ['all', ...new Set(gallery.map((item) => item.catergory))]

  const categoryBtns = buttonArray
    .map(function (catergory) {
      return `<button type="button" class="filter-btn" data-id=${catergory}>
          ${catergory}
        </button>`
    })
    .join('')

  choice.innerHTML = categoryBtns

  const filterBtns = choice.querySelectorAll('.filter-btn')

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      // console.log(e.currentTarget.dataset);
      const catergory = e.currentTarget.dataset.id
      const menuCategory = gallery.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.catergory === catergory) {
          return menuItem
        }
      })
      if (catergory === 'all') {
        diplayMenuItems(gallery)
      } else {
        diplayMenuItems(menuCategory)
      }
    })
  })
}

/*-------------total------------*/
