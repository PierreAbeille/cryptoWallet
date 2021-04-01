<template>
  <div class="home">
    <p>{{rsp.message}}</p>
    <p>
      <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sapiente, iure tempore ipsa voluptatibus possimus, fugit earum inventore aspernatur odit aliquam perferendis tenetur sunt assumenda ad minima deserunt molestias mollitia!</span>
      <span>Similique laboriosam cum totam doloribus! Facere ex molestiae in similique vel repellat reprehenderit voluptatibus eligendi. Nobis quia ipsum, ab tempora ratione laudantium magnam minima adipisci quas aut! Velit, placeat cupiditate!</span>
      <span>Sapiente dolorum, quidem, quam labore libero in repudiandae doloremque repellendus beatae delectus similique distinctio nesciunt nobis aperiam aut rem architecto. Libero architecto neque consequuntur recusandae corrupti molestias ipsa rem quia.</span>
      <span>Ducimus saepe quidem quia odit nisi consequatur maxime, veritatis numquam suscipit, mollitia praesentium inventore est totam aliquid assumenda laboriosam neque sapiente dolor. Magnam rem dolore, fugiat expedita mollitia numquam tempore!</span>
      <span>Ipsum dolorem unde sint quia quae ut quas corrupti dolor? Reiciendis, error repudiandae nesciunt, harum voluptas maiores consequuntur voluptatibus voluptatem consequatur ipsa enim alias placeat soluta perferendis eius, reprehenderit a!</span>
      <span>Beatae doloribus aut minima, pariatur veniam vel quam expedita sunt distinctio suscipit velit officiis reiciendis facere adipisci molestias. Rem, quisquam neque. Enim numquam consequatur excepturi culpa ratione, repellendus cum possimus.</span>
      <span>Repudiandae, porro! Cumque architecto deleniti ipsa incidunt accusamus pariatur placeat velit animi cupiditate minima enim, asperiores possimus eaque. Corrupti possimus quisquam tempore, itaque amet reprehenderit quidem expedita explicabo? Dignissimos, fugiat.</span>
      <span>Numquam deserunt est facilis, minima expedita provident quae libero incidunt et possimus rerum magnam molestiae ipsa vitae, accusantium aut sequi reprehenderit? Ex dicta labore optio alias tempora dignissimos nostrum beatae.</span>
      <span>Cum rem nam aspernatur cumque saepe deleniti, perspiciatis, qui vel sed quaerat eum adipisci similique possimus eligendi esse modi dolores dolor corporis repellat labore? Dignissimos atque natus aperiam facilis delectus?</span>
      <span>Tempore ratione nemo consequatur perspiciatis expedita quod, impedit voluptatum iure eaque est optio magni maxime quaerat vel voluptates voluptate itaque libero blanditiis a? Porro cum ipsam maxime libero culpa quo?</span>
      <span>Dignissimos odio laboriosam provident harum nihil autem molestiae iste dolor? Possimus distinctio animi dolorum impedit aliquid corrupti facilis molestias quos saepe omnis voluptatum eius nostrum fugiat, voluptatem delectus error obcaecati.</span>
      <span>Repudiandae dignissimos molestiae voluptates explicabo autem distinctio dolorem, illum et reiciendis neque! Numquam porro consequatur magnam corporis! Eos praesentium, blanditiis rem neque eum explicabo dignissimos soluta nemo, nisi expedita inventore.</span>
      <span>Sed necessitatibus iure eius cupiditate, ex expedita est veniam itaque assumenda voluptate quidem dicta porro cumque pariatur doloremque repudiandae mollitia eum vero. In quaerat doloribus suscipit nostrum, dignissimos facilis quos?</span>
      <span>Consectetur odio molestias fugiat provident dicta, numquam itaque voluptates, quo eveniet nam nulla quisquam aperiam hic cum sed harum quis soluta excepturi! Dolorum corporis aliquam ipsam doloribus saepe, veritatis beatae.</span>
      <span>Tempore perferendis asperiores sed voluptate nam ex, blanditiis numquam magni aspernatur temporibus culpa deleniti distinctio, eos officia aliquam dolor aut in pariatur necessitatibus ducimus, beatae aliquid! Corporis eveniet dolor architecto!</span>
      <span>Quasi earum temporibus nam, aliquam quod nisi ab placeat nemo culpa, voluptate beatae. Odit dolores eligendi, recusandae ducimus consequuntur obcaecati illo? Reprehenderit sunt facere velit beatae modi deserunt. Modi, omnis.</span>
      <span>Facere repellat ipsam asperiores iste necessitatibus itaque consequatur sapiente, laborum, repudiandae enim similique impedit accusantium ab. Autem sapiente in commodi similique expedita cupiditate eveniet incidunt optio. Voluptatem distinctio laudantium voluptatum.</span>
      <span>Explicabo iure dolorem, molestiae minima ex impedit dolorum obcaecati atque libero hic, debitis tempore sapiente doloremque ea optio laborum, quaerat repellat reiciendis! Nihil exercitationem ullam velit delectus dicta esse dolor?</span>
      <span>Dicta dolore aliquid magnam, repellat aperiam excepturi facere rerum et quod magni voluptatibus perferendis eligendi nobis sed assumenda quisquam maxime neque temporibus provident, blanditiis minus natus. Debitis nemo quidem tempora?</span>
      <span>Eos quibusdam impedit vel est, animi accusamus blanditiis iusto optio! Ipsam sapiente, facere est eligendi saepe maxime quo eos, doloremque ullam amet totam, obcaecati aliquam consectetur vitae porro a dignissimos?</span>
    </p>
  </div>
</template>

<script>
console.log('salut')
const api = 'http://localhost:3000/home'

export default {

  name: 'Home',

  data: () => ({
    error: '',
    rsp: []
  }),

  mounted () {
    fetch(api)
      .then(response => response.json())
      .then(result => {
        this.rsp = result
      })
  },
  methods: {}
}
</script>

<style>
</style>
