<template>
  <div class="boursicoter">
    <p>Nom de l'actif choisi : {{rsp[0].actif}}</p>
    <p>Nombre d'actifs : {{rsp[0].total}}</p>
    <p>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit consequuntur, rem quasi molestias dolorum nisi possimus neque impedit sequi vero nesciunt id adipisci. Ducimus corporis ut blanditiis saepe ratione.</span>
        <span>Quod, qui repellat. Quas rem dolorum eligendi minus ipsam suscipit consequatur aut ducimus! Obcaecati nulla ut alias consequuntur dicta, veritatis cumque aspernatur dolorum repellat error. Dignissimos ab at minima porro!</span>
        <span>Modi optio delectus corporis dolorum mollitia nihil tenetur, repudiandae facilis voluptatibus magni maiores provident nobis veritatis at, repellat harum quaerat laudantium quisquam? Est beatae sunt saepe deserunt a, numquam explicabo.</span>
        <span>Qui numquam culpa repellendus, sapiente eum reiciendis voluptate quia. Iure deleniti aliquid minima labore odio autem. Eos in voluptatem pariatur omnis, facilis voluptate obcaecati blanditiis ipsa quas aut, minima animi.</span>
        <span>Ea distinctio quod ducimus rerum, sequi excepturi tenetur in adipisci aut aliquam perspiciatis praesentium corrupti suscipit veniam minus repudiandae provident nemo hic pariatur itaque. Vel consequatur nobis eaque dolorum vitae!</span>
        <span>Natus ipsa quisquam, reiciendis harum veniam sit soluta beatae sequi molestias distinctio. Accusamus quibusdam quae labore fugiat eveniet quasi ipsam odio? Asperiores ex maiores laudantium dolorem minus deserunt iure sequi?</span>
        <span>Voluptatem quaerat eligendi deserunt assumenda sint quas quod, quam id asperiores officia quia accusamus laborum tempora quis beatae facere voluptas illo itaque iure minima sed dignissimos? Quia mollitia repellat explicabo.</span>
        <span>Odio ut magni voluptatem quas ex aspernatur commodi fuga? Assumenda nihil incidunt earum sint numquam obcaecati eius, debitis amet natus consequatur ex autem placeat rerum eum corrupti! A, repellendus dicta.</span>
        <span>Repellendus ad culpa soluta ducimus omnis tenetur deserunt iste harum. Repellendus enim in facilis blanditiis nulla, esse magnam dolore sunt dicta libero, totam explicabo possimus mollitia modi, inventore eos aspernatur.</span>
        <span>Quod quidem est amet quaerat optio iusto aperiam nemo quae maxime nesciunt error sequi temporibus molestias dolorem, reprehenderit id, dicta vero debitis, explicabo excepturi dolorum et architecto. Error, consectetur deleniti.</span>
        <span>Perferendis ipsa distinctio dolorum reprehenderit hic animi ad a dolor natus quae ab quos aut, obcaecati aliquid tempore, optio fugit? Labore neque incidunt dolores aut nisi officiis, esse possimus laudantium!</span>
        <span>Recusandae incidunt quae tenetur optio dolorem, explicabo voluptates voluptatem aut minima vel magnam consectetur excepturi unde. Natus unde tempore, accusamus cumque libero nihil animi rerum omnis, consequuntur optio sed non!</span>
        <span>Commodi eveniet vero deleniti cupiditate fugiat ad repellendus voluptatibus fuga! Eaque autem natus tempore eligendi laboriosam sapiente neque quas et ut quasi adipisci cum minus culpa vel, totam dolorum praesentium?</span>
        <span>Aspernatur unde obcaecati labore non consectetur, quidem harum, cum dicta perspiciatis modi nemo dolorum porro. Voluptatum alias nisi architecto nostrum voluptate suscipit totam perspiciatis, recusandae facere voluptates corrupti itaque repudiandae!</span>
        <span>Tempore autem quam commodi laboriosam. Voluptatum et explicabo illum magni nam, ratione eveniet magnam temporibus quod cum expedita quo qui sed recusandae porro voluptates quasi? Sapiente illo laudantium quae accusamus.</span>
        <span>Incidunt quidem, accusantium excepturi aliquid expedita quam temporibus iste fugit ratione, itaque voluptas nihil ab minus tenetur quas magni beatae dolorum dolore? Obcaecati nemo nulla consectetur dolores, rerum ab cupiditate.</span>
        <span>Minima culpa quisquam blanditiis voluptates quaerat quas neque illo sunt quam? Animi veniam ducimus, aspernatur quos adipisci reprehenderit impedit optio, saepe numquam voluptatem corporis et deleniti quis quae, reiciendis ipsum?</span>
        <span>Ipsa, nihil quia at, minima nesciunt porro hic, cumque alias ut voluptatem deserunt dignissimos labore quaerat earum reprehenderit cupiditate consequuntur delectus reiciendis itaque praesentium ullam doloremque sed voluptate? Adipisci, reiciendis.</span>
        <span>Distinctio, debitis illum culpa vel similique possimus non iusto in eaque nihil at fuga. Enim itaque non quod, eos cum doloremque, qui aspernatur nihil deserunt magnam velit numquam illo esse?</span>
        <span>Quo, provident deleniti. Nulla deserunt odio recusandae quaerat vitae inventore, repudiandae corporis ullam consequatur? Fuga dolorum quia at. Tenetur odio vero inventore a doloremque facere, aspernatur enim reiciendis velit suscipit.</span>
    </p>
  </div>
</template>

<script>

const api = 'http://localhost:3000/allwallets'

export default {
  name: 'Boursicoter',

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
