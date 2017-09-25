import moment from 'moment'

const newDate = () => moment().format('MMMM Do YYYY, h:mm a')

export default [
  {
    id: 111,
    title: 'The Auk Takes Flight!',
    subtitle: 'A new FeathersJS release and a year in review',
    author: 'Eric Kryski',
    content:
      'Since Feathers is so modular a lot of the components that fall under this release have been out and used in production for months, already. However, because of this modularization there was also some confusion around what was available and ready for use. This release post is an attempt to bring some clarity to those of you that are new to Feathers and our friends that have been around for some time. When we announced the Auk release, the intent was to give people insight into all the changes across all the modules on a regular basis and to group things logically so that we could do succinct release announcements. This has been easier said than done and as a result we have learned a ton about how best to release and maintain all these modules and accept new modules from the community. Going forward we’re going to be shipping and announcing updates more frequently. In order to do this we’ve have come up with a process to determine the readiness of a module.',
    createdAt: newDate()
  },
  {
    id: 222,
    title: 'Bacon Ipsum',
    subtitle: 'Hot, tender, crispy bacon ~',
    author: 'Piglet',
    content:
      'Bacon ipsum dolor amet tongue corned beef boudin, shankle bacon jerky short ribs ham hock filet mignon t-bone. Turducken ham hock tenderloin pork chop ground round beef pork. Hamburger bresaola venison t-bone rump burgdoggen. Pastrami spare ribs sirloin beef, pig porchetta burgdoggen pork pancetta shankle corned beef ball tip strip steak. Spare ribs beef pig chuck. Meatloaf landjaeger ball tip shankle beef pork loin pancetta strip steak rump tail fatback prosciutto cupim cow biltong. Ribeye beef landjaeger biltong pastrami porchetta, cupim sirloin corned beef short ribs alcatra chuck ham picanha frankfurter. Pig kielbasa shoulder tri-tip meatball shank, chicken pork landjaeger pork belly. Short ribs drumstick sirloin pork belly ham hock doner salami corned beef meatball. Beef short loin biltong tongue, alcatra pork chop venison t-bone turducken pig. Venison tri-tip pork belly, drumstick bresaola pig frankfurter picanha short ribs meatloaf jerky ball tip fatback jowl meatball. Fatback tenderloin brisket meatball, tail ground round shankle alcatra burgdoggen. Beef bresaola porchetta ribeye prosciutto meatloaf picanha burgdoggen jerky spare ribs pig jowl. Picanha bresaola drumstick, jowl ground round rump spare ribs turducken doner biltong t-bone corned beef pork jerky hamburger. Shoulder tongue pancetta, frankfurter cow jowl ribeye bacon turducken shank jerky spare ribs. Flank spare ribs bresaola chuck filet mignon hamburger short loin alcatra porchetta beef ribs turkey picanha tail jowl. Chicken ribeye sausage meatball porchetta. Pancetta cow frankfurter pork belly shank burgdoggen kielbasa turkey bacon salami strip steak. Ground round ball tip landjaeger, pancetta tail jowl shankle bresaola alcatra ribeye doner. Tri-tip shoulder turducken biltong venison doner andouille filet mignon drumstick tail beef ribs ham hock. Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!',
    createdAt: newDate()
  },
  {
    id: 333,
    title: 'Star Wars!',
    subtitle: "Who doesn't like Star Wars?",
    author: 'Obi Wan',
    content:
      'Lucas ipsum dolor sit amet dooku sidious binks lando coruscant dooku mon mace mon jabba. Fett antilles dantooine jinn moff solo mothma darth. Greedo darth organa kenobi ben mon biggs boba. Fett ewok hutt leia coruscant wedge. Moff calrissian jade c-3po. Yoda c-3p0 ponda sidious skywalker. Hutt antilles tatooine solo. Kit skywalker droid ahsoka tusken raider fisto. Yoda hutt solo hutt sidious jabba wedge antilles leia. Jabba moff calrissian sith lando anakin leia ben organa. C-3po windu moff obi-wan wedge mace utapau. Wicket mara mace ahsoka boba padmé lando hutt hutt. Vader mon r2-d2 jinn ventress antilles mara bespin sidious. Dooku hutt skywalker calrissian. Kit ackbar ben skywalker mon. Binks c-3po antilles hutt mothma jade. Moff chewbacca calamari wicket fett grievous fett skywalker. Skywalker ackbar yavin ben darth skywalker. K-3po tatooine kessel hoth jar. Ben jawa palpatine dooku kessel mara qui-gon yoda. Ben amidala hutt sidious hoth. Sebulba mara jar c-3p0 alderaan kessel organa solo luuke. Lando dagobah coruscant greedo obi-wan. Darth padmé solo wedge baba solo anakin. Ben owen darth chewbacca naboo solo. Twilek qui-gon darth solo gamorrean tusken raider lando organa sidious. Jinn dagobah skywalker mustafar kessel alderaan organa. Coruscant antilles grievous hutt han bothan jawa. Mara hutt yavin yoda moff mothma. Padmé leia luuke darth tusken raider bothan. Padmé skywalker leia obi-wan hutt darth hutt. Hutt hutt chewbacca antilles darth leia yoda kit skywalker. Amidala calamari padmé jabba watto maul luke yoda binks. Ackbar darth chewbacca padmé jawa.',
    createdAt: newDate()
  }
]
