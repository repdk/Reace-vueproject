<template>
    <form class="contact-form">
      <label for="fname">First Name</label>
      <input @blur="validateFirstName" ref="firstname" type="text" id="fname" name="firstname" placeholder="Your name">
      <span>{{ errors.firstname }}</span>

      <label for="lname">Last Name</label>
      <input @blur="validateLastName" ref="lastname" type="text" id="lname" name="lastname" placeholder="Your last name">
      <span>{{ errors.lastname }}</span>

      <label for="email">Email</label>
      <input @blur="validateEmail" ref="email" type="text" id="email" name="email" placeholder="Your email">
      <span>{{ errors.email }}</span>

      <label for="subject">Subject</label>
      <textarea @blur="validateSubject" ref="subject" id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>
      <span>{{ errors.subject }}</span>

      <input @click="onSubmit" type="submit" value="Submit">
    </form>
</template>

<script>
export default {
  name: 'Contactform',
  data: function () {
    return {
      errors: {
        firstname: null,
        lastname: null,
        email: null,
        subject: null
      }
    }
  },
  methods: {
    validateFirstName: function () {
      const value = this.$refs.firstname.value
      if (value === '') this.errors.firstname = '*This field is required'
      else if (value.length > 32) this.errors.firstname = '*Please enter a name under 32 characters'
      else this.errors.firstname = null
    },
    validateLastName: function () {
      const value = this.$refs.lastname.value
      if (value === '') this.errors.lastname = '*This field is required'
      else if (value.length > 32) this.errors.lastname = '*Please enter a lastname under 32 characters'
      else this.errors.lastname = null
    },
    validateEmail: function () {
      /* eslint-disable no-useless-escape */
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      /* eslint-enable no-useless-escape */
      const value = this.$refs.email.value
      if (value === '') this.errors.email = '*This field is required'
      else if (!re.test(String(value).toLowerCase())) this.errors.email = '*The is not a valid email'
      else this.errors.email = null
    },
    validateSubject: function () {
      const value = this.$refs.subject.value
      if (value === '') this.errors.subject = '*This field is required'
      else this.errors.subject = null
    },
    onSubmit: function (event) {
      event.preventDefault()
      this.validateFirstName()
      this.validateLastName()
      this.validateEmail()
      this.validateSubject()
    }
  }
}
</script>

<style lang="scss">
.contact-form {
  margin: 100px auto 0;
  width: 60%;
  span {
    display: block;
    margin-bottom: 20px;
    color: red;
  }
}
input[type=email], input[type=text], select, textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    resize: none;
}

input[type=submit] {
    background-color: #33d0de;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

input[type=submit]:hover {
    background-color: #45a049;
}
</style>
