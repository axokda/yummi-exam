let navBtn = $("#navBtn");
let nav = $("nav");
let navUl = $("#navUl");
let search = $("#search");
let lettersearch = $("#lettersearch");

$("#ingredientscontainerrr").on("click", ".inItem", function () {
  let inName = $(this).children("div").first().text();

  $("#ingredientsSection").addClass("hidden");
  $("#mealsSection").removeClass("hidden");

  $.ajax({
    url: "https://www.themealdb.com/api/json/v1/1/filter.php?i=" + inName,
    success: function (result) {
      let container = "";

      for (let i = 0; i < result.meals.length; i++) {
        container =
          container +
          `<div class="relative z-0 overflow-hidden group maelItem cursor-pointer  ">
          <div class="hidden">${result.meals[i].idMeal}</div>
              <img
                src="${result.meals[i].strMealThumb}"
                class="w-full rounded"
                alt="${result.meals[i].strMeal}"
              />
              <div
                class="bg-black opacity-50 absolute w-full h-full top-full group-hover:top-0 transition-all duration-500 flex justify-center items-center rounded"
              >
                <div class="text-4xl text-white">${result.meals[i].strMeal}</div>
              </div>
            </div>`;
      }
      $("#ingredientscardContainer").html(container);
    },
  });
});

$.ajax({
  url: "https://www.themealdb.com/api/json/v1/1/list.php?i=list",
  success: function (result) {
    let container = "";
    for (let i = 0; i < result.meals.length; i++) {
      container =
        container +
        `<div class="relative z-0 overflow-hidden group inItem h-60 cursor-pointer  ">
        <div class="hidden">${result.meals[i].strIngredient}</div>
        <div class="flex justify-center text-4xl text-white " >
        <i class="fa-solid fa-drumstick-bite"></i>
        </div>    
        
            <div
              class="bg-black opacity-50 absolute w-full h-full top-0 group-hover:top-0 transition-all duration-500 flex justify-center items-center rounded"
            >
              <div class="text-4xl text-white">${result.meals[i].strIngredient}</div>
            </div>
          </div>`;
    }
    $("#ingredientscontainerrr").html(container);
  },
});

$("#categorycontainer").on("click", ".categoryItem", function () {
  let categoryName = $(this).children("div").first().text();

  $("#categorySection").addClass("hidden");
  $("#mealsSection").removeClass("hidden");

  $.ajax({
    url: "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + categoryName,
    success: function (result) {
      let container = "";

      for (let i = 0; i < result.meals.length; i++) {
        container =
          container +
          `<div class="relative z-0 overflow-hidden group maelItem cursor-pointer  ">
        <div class="hidden">${result.meals[i].idMeal}</div>
            <img
              src="${result.meals[i].strMealThumb}"
              class="w-full rounded"
              alt="${result.meals[i].strMeal}"
            />
            <div
              class="bg-black opacity-50 absolute w-full h-full top-full group-hover:top-0 transition-all duration-500 flex justify-center items-center rounded"
            >
              <div class="text-4xl text-white">${result.meals[i].strMeal}</div>
            </div>
          </div>`;
      }
      $("#categorycardContainer").html(container);
    },
  });
});

$.ajax({
  url: "https://www.themealdb.com/api/json/v1/1/list.php?a=list",
  success: function (result) {
    let container = "";

    for (let i = 0; i < result.meals.length; i++) {
      container =
        container +
        `<div class="relative z-0 overflow-hidden group areaItem h-60 cursor-pointer  ">
        <div class="hidden">${result.meals[i].strArea}</div>
        <div class="flex justify-center text-4xl text-white " >
        <i class="fa-solid fa-location-dot"></i>
        </div>    
        
            <div
              class="bg-black opacity-50 absolute w-full h-full top-0 group-hover:top-0 transition-all duration-500 flex justify-center items-center rounded"
            >
              <div class="text-4xl text-white">${result.meals[i].strArea}</div>
            </div>
          </div>`;
    }
    $("#areacontainer").html(container);
  },
});

$("#areacontainer").on("click", ".areaItem", function () {
  let areaName = $(this).children("div").first().text();

  $("#areaSection").addClass("hidden");
  $("#mealsSection").removeClass("hidden");

  $.ajax({
    url: "https://www.themealdb.com/api/json/v1/1/filter.php?a=" + areaName,
    success: function (result) {
      let container = "";

      for (let i = 0; i < result.meals.length; i++) {
        container =
          container +
          `<div class="relative z-0 overflow-hidden group maelItem cursor-pointer  ">
         <div class="hidden">${result.meals[i].idMeal}</div>
             <img
               src="${result.meals[i].strMealThumb}"
               class="w-full rounded"
               alt="${result.meals[i].strMeal}"
             />
             <div
               class="bg-black opacity-50 absolute w-full h-full top-full group-hover:top-0 transition-all duration-500 flex justify-center items-center rounded"
             >
               <div class="text-4xl text-white">${result.meals[i].strMeal}</div>
             </div>
           </div>`;
      }
      $("#areacardContainer").html(container);
    },
  });
});

$.ajax({
  url: "https://www.themealdb.com/api/json/v1/1/categories.php",
  success: function (result) {
    let container = "";

    for (let i = 0; i < result.categories.length; i++) {
      container =
        container +
        `<div class="relative z-0 overflow-hidden group categoryItem cursor-pointer  ">
        <div class="hidden">${result.categories[i].strCategory}</div>
            <img
              src="${result.categories[i].strCategoryThumb}"
              class="w-full rounded"
              alt="${result.categories[i].strCategory}"
            />
            <div
              class="bg-black opacity-50 absolute w-full h-full top-full group-hover:top-0 transition-all duration-500 flex justify-center items-center rounded"
            >
              <div class="text-4xl text-white">${result.categories[i].strCategory}</div>
            </div>
          </div>`;
    }
    $("#categorycontainer").html(container);
  },
});

lettersearch.on("keyup", function (e) {
  let value = lettersearch.val();

  $.ajax({
    url: "https://www.themealdb.com/api/json/v1/1/search.php?f=" + value,
    success: function (result) {
      let container = "";
      if (result.meals != null) {
        for (let i = 0; i < result.meals.length; i++) {
          container =
            container +
            `<div class="relative z-0 overflow-hidden group maelItem cursor-pointer  ">
      <div class="hidden">${result.meals[i].idMeal}</div>
          <img
            src="${result.meals[i].strMealThumb}"
            class="w-full rounded"
            alt="${result.meals[i].strMeal}"
          />
          <div
            class="bg-black opacity-50 absolute w-full h-full top-full group-hover:top-0 transition-all duration-500 flex justify-center items-center rounded"
          >
            <div class="text-4xl text-white">${result.meals[i].strMeal}</div>
          </div>
        </div>`;
        }
      }

      $("#searchcardContainer").html(container);
    },
  });
});

search.on("keyup", function () {
  let value = search.val();

  $.ajax({
    url: "https://www.themealdb.com/api/json/v1/1/search.php?s=" + value,
    success: function (result) {
      let container = "";

      for (let i = 0; i < result.meals.length; i++) {
        container =
          container +
          `<div class="relative z-0 overflow-hidden group maelItem cursor-pointer  ">
        <div class="hidden">${result.meals[i].idMeal}</div>
            <img
              src="${result.meals[i].strMealThumb}"
              class="w-full rounded"
              alt="${result.meals[i].strMeal}"
            />
            <div
              class="bg-black opacity-50 absolute w-full h-full top-full group-hover:top-0 transition-all duration-500 flex justify-center items-center rounded"
            >
              <div class="text-4xl text-white">${result.meals[i].strMeal}</div>
            </div>
          </div>`;
      }
      $("#searchcardContainer").html(container);
    },
  });
});

navBtn.on("click", function () {
  if (nav.hasClass("-translate-x-3/4")) {
    nav.removeClass("-translate-x-3/4");
    navUl.animate({ top: 0 });
  } else {
    nav.addClass("-translate-x-3/4");
    navUl.animate({ top: "100%" });
  }
});

$.ajax({
  url: "https://www.themealdb.com/api/json/v1/1/search.php?s=",
  success: function (result) {
    let container = "";

    for (let i = 0; i < result.meals.length; i++) {
      container =
        container +
        `<div class="relative z-0 overflow-hidden group maelItem cursor-pointer  ">
        <div class="hidden">${result.meals[i].idMeal}</div>
            <img
              src="${result.meals[i].strMealThumb}"
              class="w-full rounded"
              alt="${result.meals[i].strMeal}"
            />
            <div
              class="bg-black opacity-50 absolute w-full h-full top-full group-hover:top-0 transition-all duration-500 flex justify-center items-center rounded"
            >
              <div class="text-4xl text-white">${result.meals[i].strMeal}</div>
            </div>
          </div>`;
    }
    $("#cardContainer").html(container);
  },
});

$(".cardContainer").on("click", ".maelItem", function () {
  let id = $(this).children("div").first().text();

  $.ajax({
    url: "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id,
    success: function (result) {
      let meal = result.meals[0];
      let recContainer = "";

      for (let i = 1; i <= 20; i++) {
        let ingredient = meal[`strIngredient${i}`];
        let measure = meal[`strMeasure${i}`];

        if (ingredient) {
          recContainer += `
            <li class="bg-gray-900 py-1 px-2 rounded-md m-1">
              ${measure} ${ingredient}
            </li>`;
        }
      }

      let tagsContainer = "";
      if (meal.strTags != null) {
        let tags = meal.strTags.split(",");

        for (let i = 0; i < tags.length; i++) {
          tagsContainer =
            tagsContainer +
            `<li class="bg-yellow-900 py-1 px-2 rounded-md m-1">${tags[i]}</li>`;
        }
      }

      let container = ` <div class="grid grid-cols-4 gap-5">
          <div class="col-span-1">
            <div class="container w-full">
              <img
                class="w-full"
                src="${meal.strMealThumb}"
                alt=""
              />
              <h1 class="text-center text-5xl text-white">${meal.strMeal}</h1>
            </div>
          </div>
          <div class="col-span-3 text-white">
            <h2 class="text-xl">Instructions</h2>
            <p class="text-sm">${meal.strInstructions}</p>
            <div class="text-xl fw-bold">
              <p>Area: <span>${meal.strArea}</span></p>
              <p>Category: <span>${meal.strCategory}</span></p>
            </div>

            <div>
              Rescipes:
              <ul class="flex flex-wrap ">
                ${recContainer}
              </ul>
            </div>
            <div>
              Tags:
              <ul class="flex"> ${tagsContainer}</ul>
            </div>
            <div class="mt-5 mb-5">
              <a
                href="${meal.strSource}"
                class="bg-blue-700 py-1 px-3 rounded-lg hover:bg-blue-950 transition-colors duration-500"
                >Source</a
              >
              <a
                href="${meal.strYoutube}"
                class="bg-red-700 py-1 px-3 rounded-lg hover:bg-red-950 transition-colors duration-500"
                >Youtube</a
              >
            </div>
          </div>
        </div>`;

      $("#mealDetails").html(container);

      $("#modal").removeClass("hidden");
    },
  });
});

$(".closeModal").on("click", function () {
  $("#modal").addClass("hidden");
});

$(".contactInput").on("keyup", function () {
  let currentInput = $(this).attr("name");
  let currentvalue = $(this).val();

  if (currentInput == "nameInput") {
    if (/^[a-zA-Z ]{3,}$/.test($(this).val())) {
      $(this).addClass("valid");
      $(this).removeClass("outline-red-600");
      $(this).addClass("outline-green-600");
    } else {
      $(this).removeClass("valid");
      $(this).addClass("outline-red-600");
      $(this).removeClass("outline-green-600");
    }
  }
  if (currentInput == "EmailInput") {
    if (/^[a-zA-Z0-9._]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/.test($(this).val())) {
      $(this).addClass("valid");
      $(this).removeClass("outline-red-600");
      $(this).addClass("outline-green-600");
    } else {
      $(this).removeClass("valid");
      $(this).addClass("outline-red-600");
      $(this).removeClass("outline-green-600");
    }
  }
  if (currentInput == "phoneInput") {
    if (/^01[0125][0-9]{8}$/.test($(this).val())) {
      $(this).addClass("valid");
      $(this).removeClass("outline-red-600");
      $(this).addClass("outline-green-600");
    } else {
      $(this).removeClass("valid");
      $(this).addClass("outline-red-600");
      $(this).removeClass("outline-green-600");
    }
  }
  if (currentInput == "ageInput") {
    if (/^(1[6-9]|[2-6][0-9])$/.test($(this).val())) {
      $(this).addClass("valid");
      $(this).removeClass("outline-red-600");
      $(this).addClass("outline-green-600");
    } else {
      $(this).removeClass("valid");
      $(this).addClass("outline-red-600");
      $(this).removeClass("outline-green-600");
    }
  }
  if (currentInput == "passwordInput") {
    if (/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^\w])[a-zA-Z\d\W]{7,}$/.test($(this).val())) {
      $(this).addClass("valid");
      $(this).removeClass("outline-red-600");
      $(this).addClass("outline-green-600");
    } else {
      $(this).removeClass("valid");
      $(this).addClass("outline-red-600");
      $(this).removeClass("outline-green-600");
    }
  }
  if (currentInput == "RepasswordInput") {
    if ($(this).val() == $("#passwordInput").val()) {
      $(this).addClass("valid");
      $(this).removeClass("outline-red-600");
      $(this).addClass("outline-green-600");
    } else {
      $(this).removeClass("valid");
      $(this).addClass("outline-red-600");
      $(this).removeClass("outline-green-600");
    }
  }
 
let isvalid = true ;
$.each($(".contactInput"),function(){


  if ($(this).hasClass("valid") == false ) {

    isvalid = false 

  }



}

)

if (isvalid == true) {
      $("#submit").removeAttr("disabled")

}

else {
  $("#submit").attr("disabled","")

}

});
