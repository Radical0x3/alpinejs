function slider() {
  return {
    slides: ["https://dummyimage.com/400x300", "https://dummyimage.com/555x444", "https://dummyimage.com/600x500"],
    currentSlide: '',
    nextSlide: function() {
      let index;

      if (this.slides.includes(this.currentSlide)) {
        index = this.slides.indexOf(this.currentSlide);
        index++;
        index >= this.slides.length ? index = 0 : index;
      }

      this.currentSlide = this.slides[index];
    },
    prevSlide: function() {
      let index;

      if (this.slides.includes(this.currentSlide)) {
        index = this.slides.indexOf(this.currentSlide);
        index--;
        index < 0 ? index = this.slides.length - 1 : index;
      }

      this.currentSlide = this.slides[index];
    }
  }
}

function accordion() {
  return {
    accordions: [
      {
        id: 1, 
        title: "Accordion #1", 
        text: `1) Lorem ipsum dolor sit amet consectetur adipisicing elit. xcepturi illum aut nulla soluta deleniti suscipit consequatur eum aliquam minus tempora accusamus maxime necessitatibus repudiandae eveniet laborum voluptate ipsa, eaque ab.      Inventore atque placeat voluptatum, suscipit eum recusandae tempore nihil commodi quas totam earum quia dolore nostrum aliquam quo maiores ex. Eligendi nemo facilis odit delectus ea earum maiores quis beatae! Ut totam itaque natus in et recusandae quam est asperiores. Facere, impedit sequi soluta excepturi explicabo in ad quasi? Error quos consequuntur doloremque alias quaerat voluptates ab non officia nihil? Mollitia, non. Minima assumenda sed facilis cupiditate dolor amet fugiat nobis quaerat nam, vitae ex iure mollitia quas veritatis, obcaecati porro? Nam, minus nesciunt sapiente sed voluptas atque quos accusantium. Labore similique magni asperiores facilis, consequatur ipsa perspiciatis culpa dolor dicta voluptate error nulla eveniet, vitae vero inventore illum amet recusandae animi veritatis neque cupiditate porro blanditiis eum ea. Inventore!`
      },
      {
        id: 2, 
        title: "Accordion #2", 
        text: `2) Lorem ipsum dolor sit amet consectetur adipisicing elit. xcepturi illum aut nulla soluta deleniti suscipit consequatur eum aliquam minus tempora accusamus maxime necessitatibus repudiandae eveniet laborum voluptate ipsa, eaque ab.      Inventore atque placeat voluptatum, suscipit eum recusandae tempore nihil commodi quas totam earum quia dolore nostrum aliquam quo maiores ex. Eligendi nemo facilis odit delectus ea earum maiores quis beatae! Ut totam itaque natus in et recusandae quam est asperiores. Facere, impedit sequi soluta excepturi explicabo in ad quasi? Error quos consequuntur doloremque alias quaerat voluptates ab non officia nihil? Mollitia, non. Minima assumenda sed facilis cupiditate dolor amet fugiat nobis quaerat nam, vitae ex iure mollitia quas veritatis, obcaecati porro? Nam, minus nesciunt sapiente sed voluptas atque quos accusantium. Labore similique magni asperiores facilis, consequatur ipsa perspiciatis culpa dolor dicta voluptate error nulla eveniet, vitae vero inventore illum amet recusandae animi veritatis neque cupiditate porro blanditiis eum ea. Inventore!`
      },
      {
        id: 3, 
        title: "Accordion #3", 
        text: `3) Lorem ipsum dolor sit amet consectetur adipisicing elit. xcepturi illum aut nulla soluta deleniti suscipit consequatur eum aliquam minus tempora accusamus maxime necessitatibus repudiandae eveniet laborum voluptate ipsa, eaque ab.      Inventore atque placeat voluptatum, suscipit eum recusandae tempore nihil commodi quas totam earum quia dolore nostrum aliquam quo maiores ex. Eligendi nemo facilis odit delectus ea earum maiores quis beatae! Ut totam itaque natus in et recusandae quam est asperiores. Facere, impedit sequi soluta excepturi explicabo in ad quasi? Error quos consequuntur doloremque alias quaerat voluptates ab non officia nihil? Mollitia, non. Minima assumenda sed facilis cupiditate dolor amet fugiat nobis quaerat nam, vitae ex iure mollitia quas veritatis, obcaecati porro? Nam, minus nesciunt sapiente sed voluptas atque quos accusantium. Labore similique magni asperiores facilis, consequatur ipsa perspiciatis culpa dolor dicta voluptate error nulla eveniet, vitae vero inventore illum amet recusandae animi veritatis neque cupiditate porro blanditiis eum ea. Inventore!`
      },
    ],
    acc: '',
  }
}

function spoiler() {
  return {
    isOpen: false
  }
}

function select() {
  return {
    options: ["Value 1", "Value 2", "Value 3", "Value 4", "Value 5"],
    selectedValue: "",
    isOpen: false
  }
}

function multipleSelect() {
  return {
    options: ["Value 1", "Value 2", "Value 3", "Value 4", "Value 5"],
    selectedValues: [],
    isOpen: false,
    setValue: function(val, elem) {
      if (this.selectedValues.includes(val)) {
        this.selectedValues = this.selectedValues.filter(elem => elem !== val);
      } else {
        this.selectedValues.push(val); 
      }
      elem.classList.contains("selected") ? elem.classList.remove("selected") : elem.classList.add("selected");
    }
  }
}

function modal() {
  return {
    isOpen: false,
    bodyLock: function() {
      document.querySelector("body").classList.add("lock");
    },
    bodyUnlock: function() {
      document.querySelector("body").classList.remove("lock");
    }
  }
}

function todos() {
  return {
    todos: [
      {id: 1, text: "Some todo #1", isCompleted: false},
      {id: 2, text: "Some todo #2", isCompleted: false},
      {id: 3, text: "Some todo #3", isCompleted: true},
      {id: 4, text: "Some todo #4", isCompleted: false}
    ],
    inputTodo: "",
    addTodo: function() {
      if (this.inputTodo) {
        this.todos.push({id: this.todos.length, text: this.inputTodo, isCompleted: false});
      }
      this.inputTodo = "";
    },
    removeTodo: function(id) {
      this.todos = this.todos.filter(elem => elem.id !== id);
    }
  }
}