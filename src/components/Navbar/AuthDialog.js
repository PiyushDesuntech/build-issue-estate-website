import React from "react";
import {
  DialogContent,
  Box,
  IconButton,
  Typography,
  Button,
  TextField,
  InputAdornment,
  FormControlLabel,
  Checkbox,
  Link,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import { Icon } from "@iconify/react";

const AuthDialog = ({
  handleDialogToggle,
  isLoginView,
  isMobile,
  switchView,
  switchToAgentLogin,
  isAgentLoginView,
  switchToAgentRegister,
  isAgentRegisterView,
}) => {
  return (
    <DialogContent sx={{ overflow: { xs: "scroll", md: "hidden" } }}>
      <Box display="flex" justifyContent="flex-end">
        <IconButton
          onClick={handleDialogToggle}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <Box display="flex" flexDirection={isMobile ? "column" : "row"}>
        <Box
          style={{
            display: isMobile ? "none" : "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            maxWidth: "438.65px",
            padding: "1rem",
          }}
        >
          <Image
            src="/Images/logIn.svg"
            alt="Colonial Realty Associates"
            layout="responsive"
            width={200}
            height={300}
            style={{ objectFit: "contain" }}
          />
        </Box>
        <Box flex={1} p={3}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "31.88px",
                color: "#484848",
              }}
              gutterBottom
            >
              {isLoginView
                ? "Login"
                : isAgentLoginView
                ? "Agent Login"
                : isAgentRegisterView
                ? "Agent Register"
                : "Register"}
            </Typography>
            {isLoginView && (
              <Box>
                <Button
                  onClick={switchToAgentLogin}
                  variant="contained"
                  sx={{
                    display: "flex",
                    backgroundColor: "#E0D8C3",
                    "&:hover": {
                      backgroundColor: "#3E4C66",
                      color: "#fff",
                      boxShadow: "none",
                    },
                    color: "#4D4D4D",
                    borderRadius: "8.63px",
                    textTransform: "none",
                    height: "42px",
                    boxShadow: "none",
                    fontSize: "16px",
                    fontWeight: 500,
                    width: {xs: "120px", sm:  "155px"},
                  }}
                >
                  Agent Login
                </Button>
              </Box>
            )}
          </Box>

          {isLoginView ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Button
                fullWidth
                sx={{
                  display: "flex",
                  gap: { xs: 1, md: "98px" },
                  justifyContent: "flex-start",
                  color: "#484848",
                  border: "1px solid #606060",
                  borderRadius: "8.63px",
                  textTransform: "none",
                  height: "60px",
                  maxWidth: "455.92px",
                  fontSize: "17.27px",
                  fontWeight: 500,
                  mb: "26.06px",
                }}
              >
                <Image
                  src="/Images/facebook.svg"
                  alt="facebood"
                  // layout="responsive"
                  width={39.99}
                  height={39.99}
                  style={{ objectFit: "contain" }}
                />
                Login with Facebook
              </Button>
              <Button
                fullWidth
                sx={{
                  display: "flex",
                  gap: { xs: 1, md: "117px" },
                  justifyContent: "flex-start",
                  color: "#484848",
                  border: "1px solid #606060",
                  borderRadius: "8.63px",
                  textTransform: "none",
                  height: "60px",
                  maxWidth: "455.92px",
                  fontSize: "17.27px",
                  fontWeight: 500,
                }}
              >
                <Image
                  src="/Images/google.svg"
                  alt="facebood"
                  // layout="responsive"
                  width={27.63}
                  height={27.63}
                  style={{ objectFit: "contain", marginLeft: "5px" }}
                />
                Login with Google
              </Button>
              <Typography textAlign="center" my={2}>
                Or
              </Typography>
              <TextField
                fullWidth
                placeholder="Enter username or email"
                margin="normal"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Icon icon="uil:user" style={{ fontSize: "24px" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8.63px",
                    "&:hover fieldset": {
                      borderColor: "#C0C0C0",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#C0C0C0",
                    },
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#C0C0C0",
                  },
                  "& .MuiInputLabel-root": {
                    color: "#A0A0A0",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#A0A0A0",
                  },
                  maxWidth: "455.92px",
                }}
              />
              <TextField
                fullWidth
                placeholder="Enter Password"
                type="password"
                margin="normal"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Image
                        src="/Images/lock.svg"
                        alt="facebood"
                        // layout="responsive"
                        width={21.18}
                        height={21.18}
                        style={{ objectFit: "contain" }}
                      />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8.63px",
                    "&:hover fieldset": {
                      borderColor: "#C0C0C0",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#C0C0C0",
                    },
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#C0C0C0",
                  },
                  "& .MuiInputLabel-root": {
                    color: "#A0A0A0",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#A0A0A0",
                  },
                  maxWidth: "455.92px",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  py: 1,
                  gap: 5,
                }}
              >
                <FormControlLabel
                  control={<Checkbox />}
                  label={
                    <span>
                      I agree to{" "}
                      <a href="/" target="_blank" style={{ color: "#A0A0A0" }}>
                        Terms & Conditions
                      </a>
                    </span>
                  }
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      color: "#A0A0A0",
                      fontSize: "16px",
                    },
                  }}
                />
                <Typography
                  sx={{
                    color: "#A0A0A0",
                    fontSize: "16px",
                    fontWeight: 400,
                  }}
                >
                  Lost Your Password?
                </Typography>
              </Box>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  display: "flex",
                  backgroundColor: "#E0D8C3",
                  "&:hover": {
                    backgroundColor: "#3E4C66",
                    color: "#fff",
                    boxShadow: "none",
                  },
                  color: "#4D4D4D",
                  borderRadius: "8.63px",
                  textTransform: "none",
                  px: { xs: 2, sm: 2, md: 5, lg: "40px" },
                  mt: 2,
                  height: "51.81px",
                  boxShadow: "none",
                  fontSize: "16px",
                  fontWeight: 500,
                  maxWidth: "455.92px",
                }}
              >
                Login
              </Button>
              <Typography
                mt={2}
                textAlign="center"
                sx={{
                  color: "#A0A0A0",
                  fontWeight: 400,
                  fontSize: "17.27px",
                }}
              >
                Don't you have an account?{" "}
                <Link
                  onClick={switchView}
                  sx={{
                    cursor: "pointer",
                    color: "#A0A0A0",
                    // textDecoration: "underline",
                    // textDecorationColor: "#A0A0A0",
                    fontWeight: 700,
                    fontSize: "17.27px",
                    textDecoration: "none",
                  }}
                >
                  Register
                </Link>
              </Typography>
            </Box>
          ) : isAgentLoginView ? (
            <Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <TextField
                    fullWidth
                    placeholder="Enter username or email"
                    margin="normal"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Icon icon="uil:user" style={{ fontSize: "24px" }} />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8.63px",
                        "&:hover fieldset": {
                          borderColor: "#C0C0C0",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#C0C0C0",
                        },
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#C0C0C0",
                      },
                      "& .MuiInputLabel-root": {
                        color: "#A0A0A0",
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "#A0A0A0",
                      },
                      maxWidth: "455.92px",
                    }}
                  />
                  <TextField
                    fullWidth
                    placeholder="Enter Password"
                    type="password"
                    margin="normal"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Image
                            src="/Images/lock.svg"
                            alt="facebood"
                            // layout="responsive"
                            width={21.18}
                            height={21.18}
                            style={{ objectFit: "contain" }}
                          />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8.63px",
                        "&:hover fieldset": {
                          borderColor: "#C0C0C0",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#C0C0C0",
                        },
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#C0C0C0",
                      },
                      "& .MuiInputLabel-root": {
                        color: "#A0A0A0",
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "#A0A0A0",
                      },
                      maxWidth: "455.92px",
                    }}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      py: 1,
                      gap: 5,
                    }}
                  >
                    <FormControlLabel
                      control={<Checkbox />}
                      label={
                        <span>
                          I agree to{" "}
                          <a
                            href="/"
                            target="_blank"
                            style={{ color: "#A0A0A0" }}
                          >
                            Terms & Conditions
                          </a>
                        </span>
                      }
                      sx={{
                        "& .MuiFormControlLabel-label": {
                          color: "#A0A0A0",
                          fontSize: "16px",
                        },
                      }}
                    />
                    <Typography
                      sx={{
                        color: "#A0A0A0",
                        fontSize: "16px",
                        fontWeight: 400,
                      }}
                    >
                      Lost Your Password?
                    </Typography>
                  </Box>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      display: "flex",
                      backgroundColor: "#E0D8C3",
                      "&:hover": {
                        backgroundColor: "#3E4C66",
                        color: "#fff",
                        boxShadow: "none",
                      },
                      color: "#4D4D4D",
                      borderRadius: "8.63px",
                      textTransform: "none",
                      px: { xs: 2, sm: 2, md: 5, lg: "40px" },
                      mt: 2,
                      height: "51.81px",
                      boxShadow: "none",
                      fontSize: "16px",
                      fontWeight: 500,
                      maxWidth: "455.92px",
                    }}
                  >
                    Login
                  </Button>
                  <Typography
                    mt={2}
                    textAlign="center"
                    sx={{
                      color: "#A0A0A0",
                      fontWeight: 400,
                      fontSize: "17.27px",
                    }}
                  >
                    Don't you have an account?{" "}
                    <Link
                      onClick={switchToAgentRegister}
                      sx={{
                        cursor: "pointer",
                        color: "#A0A0A0",
                        // textDecoration: "underline",
                        // textDecorationColor: "#A0A0A0",
                        fontWeight: 700,
                        fontSize: "17.27px",
                        textDecoration: "none",
                      }}
                    >
                      Register
                    </Link>
                  </Typography>
                </Box>
              </Box>

          ) : isAgentRegisterView? (
            <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            //   mt: -4
            }}
          >
            <TextField
            size="small"
              fullWidth
              placeholder="Name"
              margin="normal"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Icon icon="uil:user" style={{ fontSize: "24px" }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8.63px",
                  "&:hover fieldset": {
                    borderColor: "#C0C0C0",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#C0C0C0",
                  },
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#C0C0C0",
                },
                "& .MuiInputLabel-root": {
                  color: "#A0A0A0",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#A0A0A0",
                },
                maxWidth: "455.92px",
              }}
            />
            <TextField
            size="small"
              fullWidth
              placeholder="Email"
              margin="normal"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Icon
                      icon="material-symbols:mail-outline"
                      style={{ fontSize: "24px" }}
                    />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8.63px",
                  "&:hover fieldset": {
                    borderColor: "#C0C0C0",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#C0C0C0",
                  },
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#C0C0C0",
                },
                "& .MuiInputLabel-root": {
                  color: "#A0A0A0",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#A0A0A0",
                },
                maxWidth: "455.92px",
              }}
            />
            <TextField
            size="small"
              fullWidth
              placeholder="Mobile Number"
              margin="normal"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                     <Image
                      src="/Images/telephone.svg"
                      alt="facebood"
                      // layout="responsive"
                      width={21.18}
                      height={21.18}
                      style={{ objectFit: "contain" }}
                    />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8.63px",
                  "&:hover fieldset": {
                    borderColor: "#C0C0C0",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#C0C0C0",
                  },
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#C0C0C0",
                },
                "& .MuiInputLabel-root": {
                  color: "#A0A0A0",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#A0A0A0",
                },
                maxWidth: "455.92px",
              }}
            />
            <TextField
            size="small"
              fullWidth
              placeholder="Enter Password"
              type="password"
              margin="normal"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Image
                      src="/Images/lock.svg"
                      alt="facebood"
                      // layout="responsive"
                      width={21.18}
                      height={21.18}
                      style={{ objectFit: "contain" }}
                    />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8.63px",
                  "&:hover fieldset": {
                    borderColor: "#C0C0C0",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#C0C0C0",
                  },
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#C0C0C0",
                },
                "& .MuiInputLabel-root": {
                  color: "#A0A0A0",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#A0A0A0",
                },
                maxWidth: "455.92px",
              }}
            />
            <TextField
            size="small"
              fullWidth
              placeholder="Re-enter Password"
              type="password"
              margin="normal"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Image
                      src="/Images/lock.svg"
                      alt="facebood"
                      // layout="responsive"
                      width={21.18}
                      height={21.18}
                      style={{ objectFit: "contain" }}
                    />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8.63px",
                  "&:hover fieldset": {
                    borderColor: "#C0C0C0",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#C0C0C0",
                  },
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#C0C0C0",
                },
                "& .MuiInputLabel-root": {
                  color: "#A0A0A0",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#A0A0A0",
                },
                maxWidth: "455.92px",
              }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "#f9f9f9",
                border: "1px solid #ddd",
                borderRadius: "1.73px",
                padding: "8px 16px",
                maxWidth: "411.88px",
                // fullWidth
                width: "100%",
                mt: 2,
                mb: 1,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Checkbox />
                <Typography sx={{ fontSize: "14px", color: "#333" }}>
                  I’m not a robot
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Image
                  src="/Images/recaptcha.svg" // Replace with the reCAPTCHA logo path in your public folder
                  alt="reCAPTCHA"
                  width={30}
                  height={30}
                />
                <Typography
                  sx={{
                    fontSize: "12.09px",
                    color: "#474444",
                    fontWeight: 500,
                  }}
                >
                  reCAPTCHA
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    gap: "8px",
                    fontSize: "10.36px",
                    color: "#676767",
                  }}
                >
                  <Typography
                    component="span"
                    sx={{ fontSize: "10.36px", color: "#676767" }}
                  >
                    Privacy
                  </Typography>
                  <Typography
                    component="span"
                    sx={{ fontSize: "10.36px", color: "#676767" }}
                  >
                    Terms
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Button
              fullWidth
              variant="contained"
              sx={{
                display: "flex",
                backgroundColor: "#E0D8C3",
                "&:hover": {
                  backgroundColor: "#3E4C66",
                  color: "#fff",
                  boxShadow: "none",
                },
                color: "#4D4D4D",
                borderRadius: "8.63px",
                textTransform: "none",
                px: { xs: 2, sm: 2, md: 5, lg: "40px" },
                mt: 2,
                height: "51.81px",
                boxShadow: "none",
                fontSize: "16px",
                fontWeight: 500,
                maxWidth: "455.92px",
              }}
            >
              Register
            </Button>
            <Typography
              mt={2}
              textAlign="center"
              sx={{
                color: "#A0A0A0",
                fontWeight: 400,
                fontSize: "17.27px",
              }}
            >
              Already have an account?{" "}
              <Link
                onClick={switchToAgentLogin}
                sx={{
                  cursor: "pointer",
                  color: "#A0A0A0",
                  // textDecoration: "underline",
                  // textDecorationColor: "#A0A0A0",
                  fontWeight: 700,
                  fontSize: "17.27px",
                  textDecoration: "none",
                }}
              >
                Login
              </Link>
            </Typography>
          </Box>
          ): (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
              }}
            >
              <TextField
                fullWidth
                placeholder="Name"
                margin="normal"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Icon icon="uil:user" style={{ fontSize: "24px" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8.63px",
                    "&:hover fieldset": {
                      borderColor: "#C0C0C0",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#C0C0C0",
                    },
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#C0C0C0",
                  },
                  "& .MuiInputLabel-root": {
                    color: "#A0A0A0",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#A0A0A0",
                  },
                  maxWidth: "455.92px",
                }}
              />
              <TextField
                fullWidth
                placeholder="Email"
                margin="normal"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Icon
                        icon="material-symbols:mail-outline"
                        style={{ fontSize: "24px" }}
                      />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8.63px",
                    "&:hover fieldset": {
                      borderColor: "#C0C0C0",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#C0C0C0",
                    },
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#C0C0C0",
                  },
                  "& .MuiInputLabel-root": {
                    color: "#A0A0A0",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#A0A0A0",
                  },
                  maxWidth: "455.92px",
                }}
              />
              <TextField
                fullWidth
                placeholder="Enter Password"
                type="password"
                margin="normal"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Image
                        src="/Images/lock.svg"
                        alt="facebood"
                        // layout="responsive"
                        width={21.18}
                        height={21.18}
                        style={{ objectFit: "contain" }}
                      />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8.63px",
                    "&:hover fieldset": {
                      borderColor: "#C0C0C0",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#C0C0C0",
                    },
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#C0C0C0",
                  },
                  "& .MuiInputLabel-root": {
                    color: "#A0A0A0",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#A0A0A0",
                  },
                  maxWidth: "455.92px",
                }}
              />
              <TextField
                fullWidth
                placeholder="Re-enter Password"
                type="password"
                margin="normal"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Image
                        src="/Images/lock.svg"
                        alt="facebood"
                        // layout="responsive"
                        width={21.18}
                        height={21.18}
                        style={{ objectFit: "contain" }}
                      />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8.63px",
                    "&:hover fieldset": {
                      borderColor: "#C0C0C0",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#C0C0C0",
                    },
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#C0C0C0",
                  },
                  "& .MuiInputLabel-root": {
                    color: "#A0A0A0",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#A0A0A0",
                  },
                  maxWidth: "455.92px",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: "#f9f9f9",
                  border: "1px solid #ddd",
                  borderRadius: "1.73px",
                  padding: "8px 16px",
                  maxWidth: "411.88px",
                  // fullWidth
                  width: "100%",
                  mt: 2,
                  mb: 1,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Checkbox />
                  <Typography sx={{ fontSize: "14px", color: "#333" }}>
                    I’m not a robot
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src="/Images/recaptcha.svg" // Replace with the reCAPTCHA logo path in your public folder
                    alt="reCAPTCHA"
                    width={30}
                    height={30}
                  />
                  <Typography
                    sx={{
                      fontSize: "12.09px",
                      color: "#474444",
                      fontWeight: 500,
                    }}
                  >
                    reCAPTCHA
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "8px",
                      fontSize: "10.36px",
                      color: "#676767",
                    }}
                  >
                    <Typography
                      component="span"
                      sx={{ fontSize: "10.36px", color: "#676767" }}
                    >
                      Privacy
                    </Typography>
                    <Typography
                      component="span"
                      sx={{ fontSize: "10.36px", color: "#676767" }}
                    >
                      Terms
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  display: "flex",
                  backgroundColor: "#E0D8C3",
                  "&:hover": {
                    backgroundColor: "#3E4C66",
                    color: "#fff",
                    boxShadow: "none",
                  },
                  color: "#4D4D4D",
                  borderRadius: "8.63px",
                  textTransform: "none",
                  px: { xs: 2, sm: 2, md: 5, lg: "40px" },
                  mt: 2,
                  height: "51.81px",
                  boxShadow: "none",
                  fontSize: "16px",
                  fontWeight: 500,
                  maxWidth: "455.92px",
                }}
              >
                Register
              </Button>
              <Typography
                mt={2}
                textAlign="center"
                sx={{
                  color: "#A0A0A0",
                  fontWeight: 400,
                  fontSize: "17.27px",
                }}
              >
                Already have an account?{" "}
                <Link
                  onClick={switchView}
                  sx={{
                    cursor: "pointer",
                    color: "#A0A0A0",
                    // textDecoration: "underline",
                    // textDecorationColor: "#A0A0A0",
                    fontWeight: 700,
                    fontSize: "17.27px",
                    textDecoration: "none",
                  }}
                >
                  Login
                </Link>
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </DialogContent>
  );
};

export default AuthDialog;
