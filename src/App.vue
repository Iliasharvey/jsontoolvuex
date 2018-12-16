<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg p-0 shadow">

      <div class="brand">VMC.AI</div>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">

        <ul class="navbar-nav">

          <li class="item">
            <router-link to="/" class="nav-link">Edit</router-link>
          </li>

          <li class="item">
            <router-link to="/about" class="nav-link">Preview</router-link>
          </li> 
          
          <li class="item">
            <router-link to="/dev" class="nav-link">Dev test</router-link>
          </li>

        </ul>

      </div>
    </nav>

    <router-view />
  </div>
</template>

<style>
* {
  font-weight:bold;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
}
.navbar-toggler-icon {
  color:#000 !important;
}
.brand {
  background-color: #200058;
  padding: 25px 35px;
  width:170px;
  color: #fff;
  font-size: 25px;
  cursor:pointer;
}

.nav-link {
  padding: 31.5px !important;
  background-color: #fff;
  color: #000;
  width: 150px;
  text-align: center;
  font-size:16px;
}
.nav-link:hover {
  color:#200058;
}

.router-link-exact-active {
  color: #fff !important;
  background-color: #1e1f20;
}
</style>