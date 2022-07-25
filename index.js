const savedData = {
  "reviews": [
    {
      "id": 1,
      "reviewer": {
        "name": "Reviewer 1",
        "rating": 3.5,
        "date": "Jun 20 2022",
        "email": "reviewer1@mail.com"
      },
      "source": "Birdeye",
      "location": "Varanasi",
      "comments": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      "reply": "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox",
      "assistedBy": "Test User 1"
    },
    {
      "id": 2,
      "reviewer": {
        "name": "Reviewer 2",
        "rating": 5,
        "date": "Oct 20 2021",
        "email": "reviewer2@mail.com"
      },
      "source": "Birdeye",
      "location": "Lucknow",
      "comments": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown .",
      "reply": "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog",
      "assistedBy": "Test User 2"
    },
    {
      "id": 3,
      "reviewer": {
        "name": "Reviewer 3",
        "rating": 4,
        "date": "Jan 10 2022",
        "email": "reviewer3@mail.com"
      },
      "source": "Birdeye",
      "location": "Gurgaon",
      "comments": "Lorem Ipsum is simply dummy text of the scrambled it to make a type specimen book.",
      "reply": "",
      "assistedBy": "Test User 3"
    },
    {
      "id": 4,
      "reviewer": {
        "name": "Reviewer 4",
        "rating": 2.5,
        "date": "Apr 17 2021",
        "email": "reviewer4@mail.com"
      },
      "source": "Birdeye",
      "location": "Bangalore",
      "comments": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      "reply": "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox",
      "assistedBy": "Test User 5"
    },
    {
      "id": 5,
      "reviewer": {
        "name": "Reviewer 5",
        "rating": 5,
        "date": "May 2 2022",
        "email": "reviewer5@mail.com"
      },
      "source": "Birdeye",
      "location": "Goa",
      "comments": "of the printing and typesetting industry. Lorem Ipsum has been the industry's stan a galley of type and scrambled it to make a type specimen book.",
      "reply": "The quicken MTV ax quiz prog. Junk MTV quiz graced by fox whelps.",
      "assistedBy": "Test User 1"
    },
    {
      "id": 6,
      "reviewer": {
        "name": "Reviewer 6",
        "rating": 4.5,
        "date": "Jul 23 2022",
        "email": "reviewer6@mail.com"
      },
      "source": "Birdeye",
      "location": "",
      "comments": "Lorem Ipsum is simply dummy text of the printing and typesetting industry scrambled it to make a type specimen book.",
      "reply": "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog,",
      "assistedBy": ""
    },
    {
      "id": 7,
      "reviewer": {
        "name": "Reviewer 7",
        "rating": 2,
        "date": "Feb 11 2022",
        "email": "reviewer7@mail.com"
      },
      "source": "Birdeye",
      "location": "",
      "comments": "when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      "reply": "",
      "assistedBy": ""
    },
    {
      "id": 8,
      "reviewer": {
        "name": "Reviewer 8",
        "rating": 3,
        "date": "Mar 14 2021",
        "email": "reviewer8@mail.com"
      },
      "source": "Birdeye",
      "location": "",
      "comments": "Lorem when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      "reply": "raced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, Fox",
      "assistedBy": ""
    },
    {
      "id": 9,
      "reviewer": {
        "name": "Reviewer 9",
        "rating": 1,
        "date": "Mar 20 2022",
        "email": "reviewer9@mail.com"
      },
      "source": "Birdeye",
      "location": "",
      "comments": "Lor it to make a type specimen book.",
      "reply": "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV",
      "assistedBy": ""
    },
    {
      "id": 10,
      "reviewer": {
        "name": "Reviewer 10",
        "rating": 3.6,
        "date": "Dec 20 2021",
        "email": "reviewer10@mail.com"
      },
      "source": "Birdeye",
      "location": "",
      "comments": "Lorem",
      "reply": "",
      "assistedBy": ""
    }

  ],
  "users": ["Test User 1", "Test User 2", "Test User 3", "Test User 4", "Test User 5"],
  "locations": ["Varanasi", "Lucknow", "Gurgaon", "Bangalore", "Goa"],
}
let data
if(localStorage.getItem('data')) {
  data = JSON.parse(localStorage.getItem('data'))
} else {
  localStorage.setItem('data', JSON.stringify(savedData))
}

document.getElementById('totalReviews').innerHTML = data.reviews.length + " Reviews";
document.getElementById('averageRating').innerHTML = rating((data.reviews.reduce((acc, curr) => acc + curr.reviewer.rating, 0) / data.reviews.length).toFixed(2))

function rating(count) {
  let stars = ""
  for(let i = 1; i < 6; i++) {
    if(count >= i) {
      stars += '<i class="fa-solid fa-star"></i>'
    } else if(count >= i-0.5) {
      stars += '<i class="fa-solid fa-star-half-stroke"></i>'
    } else {
      stars += '<i class="fa-regular fa-star"></i>'
    }
  }
  return stars
}


// months array
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function render(info) {
  const demo = document.getElementById('demo');
  let content = info.map(review => {
    return `<div id=${review.id} class="card">
      <div class="header">
          <div class="userInfo">
              <div>
                  <img src="https://play-lh.googleusercontent.com/Q_Ao8YCmu0EdfWTvIutl6QH-6QcC_3XSUlJskNh1zZ3Ob8Fe8Q2mCfKBgFwifwGV9hA">
                  <p class="tooltipText">${review.source}</p>
              </div>
              <div>
                  <span>${rating(review.reviewer.rating)}</span>
                  <div class="reviewer">
                      <div>${review.reviewer.name}</div> 
                      <div>${months[new Date(review.reviewer.date).getMonth()]} ${new Date(review.reviewer.date).getDate()} ${new Date(review.reviewer.date).getFullYear()}</div>
                      <div class="down">
                          <p class="tooltipText">Show Details</p>
                          <div class="popover">
                              <div class="popoverUser">
                                  <div class="userLogo">${review.reviewer.name[0]}</div>
                                  <div>
                                      <div>${review.reviewer.name}</div>
                                      <div>Birdeye review posted on ${months[new Date(review.reviewer.date).getMonth()]} ${new Date(review.reviewer.date).getDate()} ${new Date(review.reviewer.date).getFullYear()}</div>
                                  </div>
                              </div>
                              <div class="popoverMail">
                                  <i class="fa-solid fa-envelope"></i>
                                  <span>${review.reviewer.email}</span>
                                  <i onclick=copyToClipboard('${review.reviewer.email}') class="fa-regular fa-copy"></i>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="reviewInfo">
            ${review.assistedBy && `<span><i class="fa-regular fa-user"></i> ${review.assistedBy}</span>`}
            ${review.location && `<span><i class="fa-solid fa-location-dot"></i> ${review.location}</span>`}
          </div>
      </div>
      <div class="comment">${review.comments}</div>
      ${review.reply && `<div class="reply">${review.reply}</div>`}
      <div class="action">
          <select onchange="modalPopup(this, ${review.id})">
              <option selected value="">Action</option>
              <option value="Assisted">Change Assisted By</option>
              <option value="Location">Change Location</option>
          </select>
      </div>
  </div>`;
  })
  demo.innerHTML = content.join('');
}

function copyToClipboard(email) {
  navigator.clipboard.writeText(email)
}

window.addEventListener('load', sortBy("recent"));

down = document.getElementsByClassName('down')
for (let i = 0; i < down.length; i++) {
  down[i].addEventListener('click', (event) => {
    if (event.target.classList.contains('down')) {
      event.target.children[1].style.display = 'block';
    }
  })
}

document.addEventListener('click', (event) => {
  if (!event.target.classList.contains('down') && !event.target.classList.contains('fa-copy')) {
    for (let i = 0; i < down.length; i++) {
      down[i].children[1].style.display = 'none'
    }
  }
});

function sortBy(key) {
  switch (key) {
    case "recent":
      render(data.reviews.sort((a, b) => new Date(b.reviewer.date).getTime() - new Date(a.reviewer.date).getTime()))
      break;
    case "oldest":
      render(data.reviews.sort((a, b) => new Date(a.reviewer.date).getTime() - new Date(b.reviewer.date).getTime()))
      break;
    case "lowRated":
      render(data.reviews.sort((a, b) => a.reviewer.rating - b.reviewer.rating))
      break;
    case "highRated":
      render(data.reviews.sort((a, b) => b.reviewer.rating - a.reviewer.rating))
      break;
    case "location":
      render(data.reviews.sort((a, b) => a.location > b.location ? 1 : -1))
      break;
    default:
      render(data.reviews.sort((a, b) => new Date(b.reviewer.date).getTime() - new Date(a.reviewer.date).getTime()))
      break;
  }
}

var modal = document.getElementById("modal");
var container = modal.querySelector(".container");


function modalPopup(item, id) {
  let value = item.value
  item.value=""
  document.getElementById('modalContent').innerHTML= ''
  let reviewData = data.reviews.find((item)=> {
    return item.id == id
  })
  if(value==="Assisted"){
    modal.classList.remove("hidden")
    document.getElementById('modalTitle').innerHTML = `Update Assisted By`
    let dropdown = document.createElement('select')
    dropdown.id="updated";
    dropdown.innerHTML =  `<option value=''>Remove assisted user</option>`
    data.users.forEach((e,i)=> { dropdown.innerHTML += `<option ${e==reviewData.assistedBy? "selected": ""} value='${i}'>${e}</option>`})
    document.getElementById('modalContent').appendChild(dropdown)
    let update = document.getElementById('modalUpdate')
    update.onclick = ()=>updateData(id, "assistedBy")
  } else if(value==="Location"){
    modal.classList.remove("hidden")
    document.getElementById('modalTitle').innerHTML = `Update Location`
    let dropdown = document.createElement('select')
    dropdown.id="updated"
    dropdown.innerHTML =  `<option value=''>Remove location</option>`
    data.locations.forEach((e,i)=> { dropdown.innerHTML += `<option ${e==reviewData.location? "selected": ""} value='${i}'>${e}</option>`})
    document.getElementById('modalContent').appendChild(dropdown)
    let update = document.getElementById('modalUpdate')
    update.onclick = ()=>updateData(id, "location")
  }

}

function updateData(id, type) {
  let array = type=='assistedBy' ? data.users : data.locations;
  let val = document.getElementById("updated").value
  data.reviews.forEach((item)=>{
    if(item.id==id) {
      if(array[val]) {
        item[type]=array[val]
      } else {
        item[type] = ""
      }
    }

  })
  modal.classList.add("hidden")
  sortBy(document.getElementById('sort'))
  
  localStorage.setItem('data', JSON.stringify(data))
}

document.getElementById('modalCancel').addEventListener('click', (e) => modal.classList.add("hidden"))

modal.addEventListener("click", function (e) {
  if (e.target !== modal && e.target !== container) return;     
  modal.classList.add("hidden");
});