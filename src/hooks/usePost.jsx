import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../utils/api";

function usePost({ module }) {
  const client = useQueryClient();

  const mutation = useMutation(
    (values) => {
      return api.post(`/v1/${module}`, values);
    },
    {
      onSuccess: (res) => {
        if (res !== null) {
          client.invalidateQueries(module);
          console.log("success ", res);
        }
        if (res === null) {
          console.log("error", res);
        }
      },
    }
  );
  return mutation;
}

export default usePost;
