import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ default: new Date() })
  createdAt: Date;

  @Column({ default: new Date() })
  updatedAt: Date;

  @Column()
  fullName: string;

  @Column({ unique: true })
  cpf: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  surname: string;

  @Column()
  genre: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  observations: string;

  @Column({ default: false })
  isAdm: boolean;

  @Column({
    nullable: false,
    default:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEX19fXMzMzz8/Pw8PDNzc3t7e3R0dHl5eXh4eHa2trV1dXb29vp6enJycno6OjT09MhDu1kAAAFMElEQVR4nO2d2W6rMBCG6wXbGIzf/20PDidNwpKwTGbG1XwXVaUWiV+zesM/P4IgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCH8O0/chdO2NEIbeUL8QKLoPbczZWjVhrcuxDYOmfjEgmhCzU0usi90fEKl9m+2KvF+RoW531T6uWe+ZujUOH/XdDBl9pb7adHv03ezYNtQvewYft+NvQa7PjDrsNeB/V+0qi0bTHTDgJDFW5alNPKivEHvq197PKYFjwvHUL76XkwJHiQP1q++jaU8KHB21ilg03WmBlUgMFwQqVUHR8EfLxAz22eZ0lrnjmNcMHdJFharl7af+qj7F3E8vFIoHmXM+hTChSoHvOAPEhKyNCGLC0YhsI9HAmJCxEXsggWzTKUAtvMO0d7vczjxg6qb9xY70Caa5xoM5qVIsZ4nBMmmB5TgRMAyVsiwVwoXhGIgcZ2wGwDBk2ZtqyEQzphqGCuHqfYHhOPjSFFsdCiGLBcuuBlihE4X4iEJROCMyzKV/vloAV3yOo3zQro1jX/rTAArkOchvjm0v+QDHFSgDOQJmWCyAUw3DVDoywAlkmWhAA9FyDEPQroblVNsP2NITWycd3TQDKWS7WwEsm3Js2SZ6mFxjOU6WTgAZkWcxnAAxImMTFiNeF5j4RmEBYHkmc02k/7m6cY/lfP4LV/00cU4zExf9tIbt7MOVfGo5ju0X+PMSLfcgnNDhdLapQ+AFibwr4TPnJFZ19EmfiMVKYvCXPh9swus5EnTnYF2soQ4uOBKMNYXgE7vNWKUBJ4Yd0Zgqi0DdvPrbR40uzJ5nnlF1SPPV27cb+Of+aVrmg4vbQvDynOSwLjIu/rGJiff4yXQ3l7Rh5U++e847sfMrOqY+gfE0xn+BantW3jQ3th6/5x6uEh8CyzjvcMLw7vdxphJf5y9S7A9pfM1HLCUuJ2gOaGzmW1U4SlxbeNqnUS/0FdiNNIbVJjTlYN6/qTbDRm/HrNPZXFhLKnqj11VqY4bObvU8vLbrj63IxntOIoNvzLNOPYozfYib8gqcFoI/rzml5GIXvPdjNRx/hi469fGZjk8o7tyFkR7se4BNKIKtbs/hsm9Id6C7Ep9hsssUcKfQnLTSw+NjvuWjBRZ+CrtzdkZq6fMp6LbSFcgX9TXknss1MnWy+WKamaBONvqbaWbC0RoR9tDhKrRG1KB7u7egrBgIJhxp6QTimJDSiDgmVKqjEohlQmWp0ino+fR3kKXTb7czDxxNd9pgmZDsGBTskcr3ZAqBGlGgShQFA6tUTFAUjO/33M9YfIGIeaaQ8LdrfHXyYgX85hSrn/kFWyCykxK4KcDBioNguym6k2K7KWq5n0Au+mCHKQ+AW/TxhhUPHKpCAoFKYY6Dvz2Vvw7mEAq/VhQw68X31kS5KEQd/d7BncpAm2ajEkghEX2Ujy2RYBoDVyLJxD6iRJKJqCLx6NmmsxBNCBcihsREKBBltiYRLh8Wrp+//ySQfFsU7EfMFnA43A36FbM5TD5Fe/7s9ifIPfTOlzaYsrpo7uCNlXvgdrS7OXLr6B59y4Nt5Pg3Nxsf1ufYHSgp6OBgNI76eDnoAxMA7Gh53w58WSNzfQUTdl1VvU4ll3SX69TPiLS5redmZxOOiiz3yHN3zxlNaOPO3GpdbkOVn1Uwvqh8b0vn4vq57mowQ+jamLOzr/a0o+FyjG0YuH9EYRem6cModCQWyi9dCH1fs+m2MAXqlxAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEgYp/cWtE3eYmjAIAAAAASUVORK5CYII=",
  })
  profilePhoto: string;
}
