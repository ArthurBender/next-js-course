import Link from "next/link"

interface PostProps {
  params: Promise<{ id: string }>
}

const Post = async ({ params }: PostProps) => {
  const { id } = await params;

  return (
    <main>
      <h1>Post: {id}</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis interdum sapien in turpis accumsan suscipit. Vivamus quis pharetra lectus, nec efficitur nisl. Nulla posuere magna at nunc malesuada tristique vitae nec leo. Praesent tempor non purus ac malesuada. Duis gravida felis enim, sit amet blandit lorem interdum sit amet. Nunc scelerisque volutpat volutpat. Aliquam quis hendrerit nunc. Integer dignissim sit amet nibh ut sagittis. Nulla et finibus augue. Phasellus tempor, leo a condimentum finibus, arcu purus fermentum ante, id ultricies lectus neque sed elit. Sed commodo massa a odio scelerisque semper. Donec quis felis nulla.

        Sed cursus sodales arcu id euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum congue metus quam, eu venenatis odio feugiat eget. Praesent egestas lectus sed porta mattis. Nunc commodo sem metus, sit amet dignissim magna condimentum sit amet. Fusce id placerat ante. Nam sit amet eleifend dolor, id dictum leo. Morbi vel quam id purus ultricies varius et quis dui. Sed eu dictum metus. Etiam in feugiat risus, quis auctor purus. Nullam convallis, nunc id auctor pulvinar, mauris nunc tincidunt lorem, lobortis gravida quam urna nec tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus.

        Integer neque arcu, luctus eget ornare id, molestie eget nisl. Integer eget egestas urna. Maecenas viverra, mauris ac tincidunt fermentum, mi orci dapibus ipsum, quis tincidunt ex lectus et dolor. Nulla in sagittis sem. In odio turpis, rutrum nec sapien vitae, dignissim auctor ex. Mauris dictum velit erat, nec mollis dui laoreet quis. Curabitur tincidunt pretium viverra. Nunc in rhoncus tellus, nec molestie massa.

        Nullam vel dolor at sapien tempus euismod. Maecenas porta sodales ligula pellentesque euismod. Sed lectus magna, lacinia ut sem ac, pulvinar tincidunt tellus. Maecenas interdum justo lorem. Sed urna augue, cursus ut lorem id, venenatis eleifend massa. Fusce vestibulum velit eget purus dictum, at scelerisque elit laoreet. Praesent interdum ac massa eget scelerisque. Aenean ut lectus at enim ultrices condimentum. Mauris ultrices ornare orci at dictum. Aenean volutpat, ipsum in ultricies hendrerit, metus risus gravida elit, nec pharetra nisi magna faucibus nibh.

        Sed quis convallis lorem, quis tristique tortor. Etiam consequat efficitur quam, at varius tortor consequat quis. Integer a est aliquet, rutrum tortor ut, pharetra nunc. Donec cursus maximus libero sed suscipit. Curabitur faucibus est at erat aliquam condimentum. Duis eleifend porta sem non eleifend. Donec a arcu vitae dolor porttitor tempor. Nullam in nunc in massa consequat eleifend nec sed elit. Aliquam erat volutpat. Pellentesque congue id risus nec ullamcorper.
      </p>

      <p><Link href="/">Home</Link></p>
    </main>
  )
}

export default Post