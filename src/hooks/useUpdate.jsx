import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../utils/api";

function useUpdate({ module, id }) {
  const client = useQueryClient();

  const mutation = useMutation(
    (values) => {
      return api.patch(`v1/${module}/${id}`, values);
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

export default useUpdate;
