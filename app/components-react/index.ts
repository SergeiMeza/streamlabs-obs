import NameFolder from './windows/NameFolder';
import GoLiveWindow from './windows/go-live/GoLiveWindow';
import EditStreamWindow from './windows/go-live/EditStreamWindow';
import IconLibraryProperties from './windows/IconLibraryProperties';
import NewsBanner from './root/NewsBanner';
import PatchNotes from './pages/PatchNotes';
import Display from './shared/Display';
import TitleBar from './shared/TitleBar';
import Chat from './root/Chat';
import Highlighter from './pages/Highlighter';
import Grow from './pages/Grow/Grow';
import Loader from './pages/Loader';
import NavTools from './sidebar/NavTools';
import PlatformLogo from './shared/PlatformLogo';
import AdvancedStatistics from './windows/AdvancedStatistics';
import StudioFooter from './root/StudioFooter';
import StreamScheduler from './pages/stream-scheduler/StreamScheduler';
import { createRoot } from './root/ReactRoot';
import StartStreamingButton from './root/StartStreamingButton';
import TestWidgets from './root/TestWidgets';
import RenameSource from './windows/RenameSource';
import NotificationsArea from './root/NotificationsArea';
import StudioEditor from './root/StudioEditor';
import SharedComponentsLibrary from './windows/sharedComponentsLibrary/SharedComponentsLibrary';

// list of React components to be used inside Vue components
export const components = {
  NameFolder,
  GoLiveWindow: createRoot(GoLiveWindow),
  EditStreamWindow: createRoot(EditStreamWindow),
  IconLibraryProperties,
  NewsBanner,
  PatchNotes,
  Display,
  TitleBar,
  Chat,
  Highlighter,
  Grow,
  Loader,
  NavTools,
  PlatformLogo,
  StreamScheduler: createRoot(StreamScheduler),
  AdvancedStatistics,
  SharedComponentsLibrary: createRoot(SharedComponentsLibrary),
  TestWidgets,
  RenameSource,
  StudioFooter,
  StartStreamingButton,
  NotificationsArea,
  StudioEditor,
};
