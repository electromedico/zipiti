import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { startReservation } from "../../../../store/ReservationSlice";
import { ServiceType, TypeOfService } from "../../model/Model";
import partyIcon from "../../../../resources/party_icon.jpeg";
interface ServiceButtonProps {
  type: ServiceType;
}

export const ServiceButton = ({ type }: ServiceButtonProps) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const handleOnclick = () => {
    dispatch(
      startReservation({ reservation: { typeOfService: { type: type } } })
    );
  };

  return (
    <Card
      sx={{
        minWidth: 300,
        textDecoration: "none",
        justifyContent: "center",
        display: "flex",
      }}
      component={Link}
      to={"book/1"}
      onClick={handleOnclick}
    >
      <CardMedia component="img" height="140" image={partyIcon} alt="party" />
      <CardContent></CardContent>
      <CardActions>
        <Button variant="contained" color="secondary">
          {t(`booking.service.${ServiceType[type]}`)}
        </Button>
      </CardActions>
    </Card>
  );
};
