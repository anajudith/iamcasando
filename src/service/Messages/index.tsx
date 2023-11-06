import { supabaseApi } from "../Api";

interface IMessages {
  id: string;
  message: string;
  name: string;
  email: string;
}

class Messages {
  /**
   * @description Signing in
   * @returns {Promise<IMessages[] | false>}
   */

  async getMessage(): Promise<IMessages[] | false> {
    try {
      const { data } = await supabaseApi.from("messages").select();

      if (data) {
        return data;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  }

  async postMessage(
    id: string,
    name: string,
    email: string,
    message: string
  ): Promise<IMessages[] | false> {
    try {
      const { data } = await supabaseApi
        .from("messages")
        .insert({ id, name, email, message });

      if (data) {
        console.log(data, "enviado ");
        return data;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  }

  async deleteMessage(id: string): Promise<IMessages[] | false> {
    try {
      const { data } = await supabaseApi.from("messages").delete().eq("id", id);

      if (data) {
        console.log(data);
        return data;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  }

  //   async updateMessage(
  //     noteId: string,
  //   ): Promise<IMessages[] | false> {
  //     try {
  //       const { data } = await supabaseApi
  //         .from("note")
  //         .update('id', noteId);

  //       if (data) {
  //         console.log(data);
  //         return data;
  //       } else {
  //         return false;
  //       }
  //     } catch (error) {
  //       return false;
  //     }
  //   }
}

export default new Messages();
