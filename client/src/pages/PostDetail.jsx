import PostAuthor from "../components/PostAuthor";
import { Link } from "react-router-dom";
import Thumbnail from "../images/blog22.jpg";

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor />
          <div className="post-detail__buttons">
            <Link to={`/posts/werwer/edit`} className="btn sm primary">
              Edit
            </Link>
            <Link to={`/posts/werwer/delete`} className="btn sm danger">
              Delete
            </Link>
          </div>
          <h1>This is the post title</h1>
          <div className="post-detail__thumbnail">
            <img src={Thumbnail} alt="" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            magnam aliquid repellat iure, natus est facere nesciunt, nihil aut
            error ex maxime, omnis similique reiciendis quis tempora maiores
            dolore quidem consequuntur. Nostrum explicabo, temporibus quidem
            tempore voluptatum impedit illo suscipit.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque,
            asperiores veniam tempora voluptatum assumenda quaerat illum
            repudiandae accusantium, sint, est odio nemo voluptatibus aut fugit
            natus optio eaque harum reiciendis eius ullam hic officiis facere id
            nesciunt? In libero sunt eos reiciendis illo, veritatis velit
            impedit, repellat facilis deleniti dolorem vero qui et maxime odio.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consectetur accusamus delectus necessitatibus dignissimos nisi
            voluptas aperiam esse dolor error quisquam molestiae debitis
            pariatur, tempore perspiciatis est nam ipsam culpa reprehenderit.
            Accusamus tempore fugit dolorum cum eos blanditiis, iusto fugiat
            amet possimus unde non illo numquam sint aliquam nostrum sapiente
            consequatur totam similique repudiandae, suscipit dolores molestias
            eaque modi. Omnis libero voluptate debitis dolorem porro numquam
            illum enim nihil optio adipisci aliquam pariatur, voluptates,
            commodi saepe beatae et possimus accusamus explicabo facilis nostrum
            magni est. Dolor nemo quisquam necessitatibus doloremque harum
            accusamus aliquid, corrupti pariatur tempora quaerat. Delectus
            consequatur odio voluptatum a dolores veritatis! Unde mollitia
            quidem dolores tempore eum vitae officia.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea
            voluptates ab obcaecati sint quibusdam iure maiores nisi est ad
            voluptatum!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
            ipsum culpa. Reiciendis nam consequuntur aliquam. Illo pariatur
            repellendus iste asperiores. Autem, quos? Dolorum minus sapiente
            incidunt praesentium facilis modi, dolore facere nesciunt
            repellendus soluta sequi fugiat libero officia inventore laboriosam
            ipsam! Omnis aut aliquam vero quia veritatis, repudiandae provident
            tenetur sint illum ullam obcaecati quibusdam magni, similique animi
            earum reprehenderit laudantium totam quod blanditiis autem dolorum
            minus unde. Culpa esse necessitatibus explicabo adipisci? Recusandae
            nobis esse a, explicabo beatae laudantium! Id atque recusandae culpa
            doloremque dolorum reprehenderit error laborum. Aut voluptates,
            cumque, placeat dolorem distinctio repudiandae libero fugit suscipit
            deserunt delectus, modi debitis fuga quidem temporibus quasi amet.
            Vitae debitis odit sint quia, aperiam at natus magnam incidunt culpa
            praesentium esse id tempore possimus reiciendis dolorum nemo
            numquam? Reprehenderit, recusandae molestiae? Autem molestiae quas
            quos minima libero repellat illum cupiditate voluptates debitis ea.
            Voluptatum, explicabo. Voluptas doloribus soluta sed voluptatum
            fugiat deserunt vel, alias ipsum, eum a voluptates? Fuga
            consequuntur, modi expedita neque odio cupiditate cum placeat nobis
            quidem quam doloremque dignissimos numquam quis corporis! Iusto
            harum dolorem voluptatum quam veniam! Voluptatibus, odio est. At
            commodi quas hic dolorem maxime fuga iste. Officia commodi
            recusandae esse minus sunt. Ipsum, esse.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PostDetail;
