import axios from "axios";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  async function onSubmitForm(values) {
    let config = {
      method: "post",
      url: `${ADD_URL}/api/contact`,
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    };



    try {
      const response = await axios(config);
      console.log(response);
      if (response.status == 200) {
        reset();

        console.log("success");
      }
    } catch (err) {}
  }

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <div>
          <label for="name">Name</label>
          <input type="text" name="name" placeholder="Name" />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
