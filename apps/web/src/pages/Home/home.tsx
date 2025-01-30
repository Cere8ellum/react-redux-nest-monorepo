import * as styles from "./home.module.scss";
import React, { useState } from "react";
import * as requestProcessStore from "../../core/stores/slices/RequestProcessSlice";
import reactImage from "../../assets/images/react.svg";
import Stack from "@mui/material/Stack";
import { apiFetchHello, apiFetchTextAndDate } from "../../core/api/endpoints";
import Grid from "@mui/material/Grid";
import DynamicAlert, {
  ESeverity,
} from "../../components/DynamicAlert/dynamicAlert";
import DynamicButton, {
  EColor,
} from "../../components/DynamicButton/dynamicButton";
import { TErrorMessage } from "@monorepo/types/TResponse";
import { useAppSelector } from "../../core/stores/hooks";

type TChildProps = {
  data: TErrorMessage;
  dataType: ESeverity;
  onHide: () => void;
};

const Child = ({ data, dataType, onHide }: TChildProps) => {
  return typeof data === "string" ? (
    <DynamicAlert
      isVisible={true}
      title={`Fetch ${dataType}`}
      text={data}
      type={dataType}
      onHide={onHide}
    />
  ) : (
    data.map((el, index) => (
      <DynamicAlert
        key={index}
        isVisible={true}
        title={`Fetch ${dataType}`}
        text={el}
        type={dataType}
        onHide={onHide}
      />
    ))
  );
};

const Home = () => {
  const [error, setError] = useState<TErrorMessage | null>(null);
  const [data, setData] = useState<string | null>(null);
  const [helloLoading, setHelloLoading] = useState<boolean>(false);
  const [withDateLoading, setWithDateLoading] = useState<boolean>(false);

  // const dispatch = useAppDispatch();
  const { loading } = useAppSelector(
    requestProcessStore.requestProcessSelector
  );

  const sayHello = async () => {
    setHelloLoading(true);

    return await apiFetchHello()
      .then((result) => {
        setHelloLoading(false);

        if (result.isError) {
          setError(result.errorMessage);
        } else {
          setData(result.data);
        }
      })
      .catch((e: Error) => {
        setHelloLoading(false);
        setError(e.message);
      });
  };

  const sayWithDate = async () => {
    setWithDateLoading(true);

    return await apiFetchTextAndDate(
      {
        text: "Hola Amigo",
        createdAt: new Date(),
      },
      false
    )
      .then((result) => {
        setWithDateLoading(false);

        if (result.isError) {
          setError(result.errorMessage);
        } else {
          setData(result.data);
        }
      })
      .catch((e: Error) => {
        setWithDateLoading(false);
        setError(e.message);
      });
  };

  return (
    <>
      <h2>Home page</h2>
      <div className={styles.image}>
        <img src={reactImage} alt="Logo of the React" />
      </div>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        marginTop={3}
      >
        <Grid item>
          <DynamicButton
            disabled={loading}
            isLoading={helloLoading}
            title="Say Hello"
            color={EColor.apple}
            handleClick={sayHello}
          />
        </Grid>

        <Grid item>
          <DynamicButton
            disabled={loading}
            isLoading={withDateLoading}
            title="Say With Date"
            color={EColor.peach}
            handleClick={sayWithDate}
          />
        </Grid>
      </Grid>

      <Stack sx={{ width: "100%" }} spacing={2} marginTop={5}>
        {/* Hello result */}
        {error && (
          <Child
            data={error}
            dataType={ESeverity.error}
            onHide={() => setError(null)}
          />
        )}
        {data && (
          <Child
            data={data}
            dataType={ESeverity.success}
            onHide={() => setData(null)}
          />
        )}
      </Stack>
    </>
  );
};

export default Home;
